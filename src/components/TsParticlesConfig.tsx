// src/components/particlesConfig.ts
import type { ISourceOptions } from "@tsparticles/engine";

// Only include the properties you want to customize
const TsParticlesConfig: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "#000000"
      // value: "#000000"
    },
  },
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  interactivity: {
    events: {
      onHover: {
        enable: false  // Disable hover interaction completely
      }
    }
  },
  particles: {
    // Hide particles, show only lines
    opacity: {
      value: 0
    },
    number: {
      value: 120,  // Reduced from 100 to lower density
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },
    move: {
      enable: true,
      speed: 3  // Slower movement
    },
    links: {
      enable: true,
      color: {
        value: "#00ff40"  // Line color (bright green)
      },
      distance: 200,  // Maximum distance to draw lines
      opacity: 0.3,  // Line opacity
      width: 1  // Line thickness
    }
  }
};

export default TsParticlesConfig;