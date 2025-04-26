"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import TsParticlesConfig from "./TsParticlesConfig";

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={TsParticlesConfig}
      className="absolute inset-0 -z-10"
    />
  );
}
