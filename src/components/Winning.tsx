import React, { useCallback, useEffect, useRef } from "react";
import {
  Container,
  Engine,
  Particles as ParticlesType,
} from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const Fireworks = () => {
  const containerRef = useRef<Container>();
  const particlesRef = useRef<ParticlesType>();

  useEffect(() => {
    if (containerRef.current && particlesRef.current) {
      const interval = setInterval(() => {
        const particleCount = Math.floor(Math.random() * 100) + 50; // Randomize particle count for each explosion
        particlesRef.current.options.particles.number.value = particleCount;
        // particlesRef.current.refresh();
      }, 2000); // Interval between explosions (in milliseconds)

      return () => clearInterval(interval);
    }
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      if (container) {
        containerRef.current = container;
        particlesRef.current = container.particles;
      }
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            enable: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 0, // Start with no particles
          },
          size: {
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
