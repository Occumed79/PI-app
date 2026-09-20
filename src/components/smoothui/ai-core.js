"use client";

import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export const AI_STATE_MOTION = {
  done: {
    accent: "success",
    glow: 0.7,
    hueRotate: 0,
    intensity: 0.4,
    motif: "ping",
    pulseSeconds: 0.65,
    reactivity: 0,
    saturation: 1,
    scale: 1.1,
    speed: 0.8,
    tumble: 0.02,
    turbulence: 0.08,
  },
  error: {
    accent: "danger",
    glow: 0.25,
    hueRotate: 0,
    intensity: 0.5,
    motif: "fault",
    pulseSeconds: 0.9,
    reactivity: 0,
    saturation: 0.3,
    scale: 0.96,
    speed: 1,
    tumble: 0,
    turbulence: 0.55,
  },
  idle: {
    accent: null,
    glow: 0.15,
    hueRotate: 0,
    intensity: 0.3,
    motif: "breathe",
    pulseSeconds: 4.5,
    reactivity: 0,
    saturation: 0.75,
    scale: 0.94,
    speed: 0.6,
    tumble: 0.012,
    turbulence: 0.14,
  },
  listening: {
    accent: null,
    glow: 0.6,
    hueRotate: 0,
    intensity: 0.75,
    motif: "receive",
    pulseSeconds: 1.6,
    reactivity: 1,
    saturation: 1.05,
    scale: 1.06,
    speed: 1,
    tumble: 0.03,
    turbulence: 0.42,
  },
  streaming: {
    accent: null,
    glow: 0.45,
    hueRotate: -10,
    intensity: 0.6,
    motif: "pulse",
    pulseSeconds: 1.25,
    reactivity: 0.6,
    saturation: 1,
    scale: 1.02,
    speed: 1.4,
    tumble: 0.06,
    turbulence: 0.5,
  },
  thinking: {
    accent: null,
    glow: 0.35,
    hueRotate: 18,
    intensity: 1,
    motif: "scan",
    pulseSeconds: 1.1,
    reactivity: 0.15,
    saturation: 1,
    scale: 1,
    speed: 2.4,
    tumble: 0.14,
    turbulence: 0.95,
  },
};

export const getAIStateMotion = (state) =>
  AI_STATE_MOTION[state ?? "idle"] ?? AI_STATE_MOTION.idle;

const isMotionValue = (value) =>
  typeof value === "object" && value !== null && typeof value.get === "function";

export const useAmplitudeValue = (amplitude) => {
  const fallback = useMotionValue(0);
  const numeric = typeof amplitude === "number" ? amplitude : null;

  useEffect(() => {
    if (numeric !== null) fallback.set(numeric);
  }, [numeric, fallback]);

  return isMotionValue(amplitude) ? amplitude : fallback;
};
