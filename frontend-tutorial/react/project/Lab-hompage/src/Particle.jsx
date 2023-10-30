import React, { useCallback } from "react";

import { loadSlim } from "tsparticles-slim";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: {
          value: "#0d47a1",
        },
        opacity: {
          value: 0.5,
        },
      },
      fpsLimit: 200,
      interactivity: {
        detect_on: "window",
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
            color: "#000",
            distance: 50,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
          direction: "outside",
          enable: true,
          outModes: {
            default: "destroy",
          },
          random: false,
          speed: 10,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 180,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />
    
  );
};

export default Particle;
