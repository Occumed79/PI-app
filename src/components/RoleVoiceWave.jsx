import React, { useEffect, useRef } from 'react';
import SiriWave from 'siriwave';

const STATE = {
  idle: { amplitude: 0.45, speed: 0.08 },
  listening: { amplitude: 0.95, speed: 0.14 },
  thinking: { amplitude: 0.72, speed: 0.18 },
  speaking: { amplitude: 1.28, speed: 0.22 },
  error: { amplitude: 0.28, speed: 0.05 },
};

export default function RoleVoiceWave({ state = 'idle', height = 92, className = '' }) {
  const containerRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const create = () => {
      waveRef.current?.dispose?.();
      container.replaceChildren();
      const width = Math.max(260, Math.round(container.getBoundingClientRect().width || 360));
      const settings = STATE[state] || STATE.idle;
      const wave = new SiriWave({
        container,
        width,
        height,
        style: 'ios9',
        speed: settings.speed,
        amplitude: settings.amplitude,
        autostart: true,
        cover: true,
        lerpSpeed: 0.05,
      });
      wave.start();
      waveRef.current = wave;
    };

    create();
    const observer = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(() => create());
    observer?.observe(container);

    return () => {
      observer?.disconnect();
      waveRef.current?.dispose?.();
      waveRef.current = null;
    };
  }, [height]);

  useEffect(() => {
    const settings = STATE[state] || STATE.idle;
    waveRef.current?.setAmplitude?.(settings.amplitude);
    waveRef.current?.setSpeed?.(settings.speed);
  }, [state]);

  return <div ref={containerRef} className={`w-full overflow-hidden ${className}`} style={{ height }} aria-hidden="true" />;
}
