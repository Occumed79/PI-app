import React, { useEffect, useMemo, useRef, useState } from 'react';

// Browser WebGPU port of Figma's first-party "Pattern refraction" shader.
// Figma shader id: f1a4fc0f-dcc1-45e3-bad6-ec82abb7c7eb
// Source version inspected during implementation: f4dc792b5acd7c31b485a20443618bfbc40c7844
//
// The visual effect is illustrative only. It never changes Role Intelligence scores.

const SHADER = /* wgsl */ `
diagnostic(off, derivative_uniformity);

const PI: f32 = 3.14159265358979323846;

struct Uniforms {
  centerPos: vec2f,
  angle: f32,
  size: f32,
  amount: f32,
  seamlessness: f32,
  frost: f32,
  iorDispersion: f32,
  patternType: u32,
  pixelWrapMode: u32,
  _pad0: u32,
  _pad1: u32,
};

@group(0) @binding(0) var<uniform> u: Uniforms;
@group(0) @binding(1) var inputSampler: sampler;
@group(0) @binding(2) var inputTexture: texture_2d<f32>;
@group(0) @binding(3) var inputSamplerClamp: sampler;

struct VsOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vs_main(@location(0) pos: vec2f, @location(1) uv: vec2f) -> VsOut {
  var out: VsOut;
  out.position = vec4f(pos, 0.0, 1.0);
  out.uv = uv;
  return out;
}

fn wave(t: f32, freq: f32, amp: f32) -> f32 {
  return sin(t * freq * 2.0 * PI) * amp;
}

fn zigzag(t: f32, freq: f32, amp: f32) -> f32 {
  let p = t * freq;
  return (abs(fract(p) * 2.0 - 1.0) * 2.0 - 1.0) * amp;
}

fn hash3(p: vec3f) -> f32 {
  var q = fract(p * 0.3183099 + vec3f(0.1));
  q *= 17.0;
  return fract(q.x * q.y * q.z * (q.x + q.y + q.z));
}

fn vnoise(p: vec3f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let s = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(
      mix(hash3(i + vec3f(0.0,0.0,0.0)), hash3(i + vec3f(1.0,0.0,0.0)), s.x),
      mix(hash3(i + vec3f(0.0,1.0,0.0)), hash3(i + vec3f(1.0,1.0,0.0)), s.x),
      s.y
    ),
    mix(
      mix(hash3(i + vec3f(0.0,0.0,1.0)), hash3(i + vec3f(1.0,0.0,1.0)), s.x),
      mix(hash3(i + vec3f(0.0,1.0,1.0)), hash3(i + vec3f(1.0,1.0,1.0)), s.x),
      s.y
    ),
    s.z
  );
}

fn patternHeight(p: vec2f, rotation: mat2x2f, invSize: f32) -> f32 {
  var pos = p - u.centerPos;
  pos = rotation * pos;
  pos *= invSize;

  if (u.patternType == 2u) {
    pos.x += wave(pos.y, 0.15, 0.6);
  } else if (u.patternType == 1u) {
    pos.x += zigzag(pos.y, 0.15, 0.6);
  }

  let gridPos = fract(pos) * 2.0 - 1.0;
  var height = 1.0;

  if (u.patternType <= 2u) {
    height = pow(sin((gridPos.x * 0.5 + 0.5) * PI), 0.7);
  } else if (u.patternType == 3u) {
    height = 1.0 - dot(gridPos, gridPos);
  } else if (u.patternType == 4u) {
    let a = abs(gridPos);
    height = 1.0 - max(a.x, a.y) * dot(gridPos, gridPos) * 0.8;
  } else {
    let d = abs(gridPos * 1.125) - vec2f(0.5);
    height = 1.0 - saturate(length(max(d, vec2f(0.0))) + max(d.x, d.y));
  }

  height = saturate(height);
  height *= pow(height, max(u.seamlessness, 0.001));

  if (u.frost > 0.0001) {
    height += (vnoise(vec3f(p * 0.5, 1.0)) - 0.5) * u.frost;
  }

  return height;
}

fn patternNormal(p: vec2f, rotation: mat2x2f, invSize: f32) -> vec3f {
  let h = patternHeight(p, rotation, invSize);
  let dx = patternHeight(p + vec2f(0.125, 0.0), rotation, invSize);
  let dy = patternHeight(p + vec2f(0.0, 0.125), rotation, invSize);
  return normalize(vec3f(h - dx, h - dy, 0.0125));
}

fn sampleWrapped(pixelPos: vec2f, dims: vec2f) -> vec4f {
  var uv = pixelPos / dims;

  if (u.pixelWrapMode == 0u) {
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      return vec4f(0.0);
    }
    return textureSampleLevel(inputTexture, inputSamplerClamp, clamp(uv, vec2f(0.0), vec2f(1.0)), 0.0);
  }

  if (u.pixelWrapMode == 1u) {
    return textureSampleLevel(inputTexture, inputSamplerClamp, clamp(uv, vec2f(0.0), vec2f(1.0)), 0.0);
  }

  if (u.pixelWrapMode == 2u) {
    return textureSampleLevel(inputTexture, inputSampler, fract(uv), 0.0);
  }

  let m = fract(uv * 0.5) * 2.0;
  let mirrored = vec2f(
    select(m.x, 2.0 - m.x, m.x > 1.0),
    select(m.y, 2.0 - m.y, m.y > 1.0)
  );
  return textureSampleLevel(inputTexture, inputSamplerClamp, clamp(mirrored, vec2f(0.0), vec2f(1.0)), 0.0);
}

@fragment
fn fs_main(@builtin(position) fragPos: vec4f, @location(0) uv: vec2f) -> @location(0) vec4f {
  let dims = vec2f(textureDimensions(inputTexture, 0));
  let localPos = uv * dims;
  let ray = vec3f(0.0, 0.0, -1.0);

  let c = cos(u.angle);
  let s = sin(u.angle);
  let rotation = mat2x2f(c, s, -s, c);
  let invSize = 1.0 / u.size;

  let normal = patternNormal(localPos, rotation, invSize);

  let rr = refract(ray, normal, 1.333 + u.iorDispersion);
  let rg = refract(ray, normal, 1.333);
  let rb = refract(ray, normal, 1.333 - u.iorDispersion);

  let cr = sampleWrapped(localPos + rr.xy * u.amount, dims);
  let cg = sampleWrapped(localPos + rg.xy * u.amount, dims);
  let cb = sampleWrapped(localPos + rb.xy * u.amount, dims);

  return vec4f(cr.r, cg.g, cb.b, cg.a);
}
`;

const QUAD = new Float32Array([
  -1, -1, 0, 1,
   1, -1, 1, 1,
  -1,  1, 0, 0,
  -1,  1, 0, 0,
   1, -1, 1, 1,
   1,  1, 1, 0,
]);

async function svgBitmap(root) {
  const svg = root?.querySelector('svg');
  if (!svg) return null;

  const bounds = svg.getBoundingClientRect();
  const width = Math.max(320, Math.round(bounds.width || 760));
  const height = Math.max(220, Math.round(bounds.height || 360));
  const clone = svg.cloneNode(true);

  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', String(width));
  clone.setAttribute('height', String(height));
  if (!clone.getAttribute('viewBox')) clone.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const xml = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
  const bitmap = await createImageBitmap(blob);
  return { bitmap, width, height };
}

function categoryPattern(category, categories) {
  const index = Math.max(0, categories.indexOf(category));
  return index % 6;
}

export default function PatternRefraction({
  source,
  activeCategory,
  categoryOrder = [],
  strength = 48,
  className = '',
}) {
  const sourceRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('loading');

  const patternType = useMemo(
    () => categoryPattern(activeCategory, categoryOrder),
    [activeCategory, categoryOrder]
  );

  useEffect(() => {
    let cancelled = false;
    let inputTexture = null;
    let bitmap = null;

    async function draw() {
      if (!navigator.gpu) {
        if (!cancelled) setStatus('unsupported');
        return;
      }

      const sourceData = await svgBitmap(sourceRef.current);
      if (!sourceData || cancelled) {
        if (!cancelled) setStatus('fallback');
        return;
      }

      bitmap = sourceData.bitmap;
      const { width, height } = sourceData;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));

      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        if (!cancelled) setStatus('unsupported');
        return;
      }

      const device = await adapter.requestDevice();
      const context = canvas.getContext('webgpu');
      const format = navigator.gpu.getPreferredCanvasFormat();

      context.configure({
        device,
        format,
        alphaMode: 'premultiplied',
      });

      const shaderModule = device.createShaderModule({ code: SHADER });

      const uniformBuffer = device.createBuffer({
        size: 48,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });

      const vertexBuffer = device.createBuffer({
        size: QUAD.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      });
      device.queue.writeBuffer(vertexBuffer, 0, QUAD);

      const samplerRepeat = device.createSampler({
        addressModeU: 'repeat',
        addressModeV: 'repeat',
        magFilter: 'linear',
        minFilter: 'linear',
      });

      const samplerClamp = device.createSampler({
        addressModeU: 'clamp-to-edge',
        addressModeV: 'clamp-to-edge',
        magFilter: 'linear',
        minFilter: 'linear',
      });

      inputTexture = device.createTexture({
        size: [bitmap.width, bitmap.height, 1],
        format: 'rgba8unorm',
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
      });

      device.queue.copyExternalImageToTexture(
        { source: bitmap },
        { texture: inputTexture },
        [bitmap.width, bitmap.height]
      );

      const pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: {
          module: shaderModule,
          entryPoint: 'vs_main',
          buffers: [{
            arrayStride: 16,
            attributes: [
              { shaderLocation: 0, format: 'float32x2', offset: 0 },
              { shaderLocation: 1, format: 'float32x2', offset: 8 },
            ],
          }],
        },
        fragment: {
          module: shaderModule,
          entryPoint: 'fs_main',
          targets: [{ format }],
        },
        primitive: { topology: 'triangle-list' },
      });

      const uniforms = new ArrayBuffer(48);
      const f32 = new Float32Array(uniforms);
      const view = new DataView(uniforms);

      f32[0] = bitmap.width * 0.5;
      f32[1] = bitmap.height * 0.5;
      f32[2] = -Math.PI / 4;
      f32[3] = Math.max(72, Math.min(bitmap.width, bitmap.height) * 0.24);
      f32[4] = Math.max(18, Number(strength) || 48);
      f32[5] = 0.14;
      f32[6] = 0.015;
      f32[7] = 0.012;
      view.setUint32(32, patternType, true);
      view.setUint32(36, 3, true);

      device.queue.writeBuffer(uniformBuffer, 0, uniforms);

      const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: uniformBuffer } },
          { binding: 1, resource: samplerRepeat },
          { binding: 2, resource: inputTexture.createView() },
          { binding: 3, resource: samplerClamp },
        ],
      });

      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{
          view: context.getCurrentTexture().createView(),
          loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
          storeOp: 'store',
        }],
      });

      pass.setPipeline(pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.setVertexBuffer(0, vertexBuffer);
      pass.draw(6);
      pass.end();

      device.queue.submit([encoder.finish()]);
      if (!cancelled) setStatus('ready');
    }

    setStatus('loading');
    const frame = requestAnimationFrame(() => {
      draw().catch(() => {
        if (!cancelled) setStatus('fallback');
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      bitmap?.close?.();
      inputTexture?.destroy?.();
    };
  }, [activeCategory, categoryOrder, patternType, source, strength]);

  const showFallback = status === 'unsupported' || status === 'fallback';

  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20 ${className}`}>
      <div
        ref={sourceRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[360px] w-[760px] opacity-0"
      >
        {source}
      </div>

      {showFallback ? (
        <div className="h-full w-full">{source}</div>
      ) : (
        <canvas
          ref={canvasRef}
          aria-label="Figma Pattern Refraction visual preview"
          className={`h-full w-full transition-opacity duration-300 ${status === 'ready' ? 'opacity-100' : 'opacity-20'}`}
        />
      )}

      <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-white/30 backdrop-blur-md">
        Figma Pattern Refraction · illustrative
      </div>
    </div>
  );
}
