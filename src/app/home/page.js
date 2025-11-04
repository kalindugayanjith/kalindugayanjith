"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function HomePage() {
useEffect(() => {
   const initVanta = () => {
      if (window.VANTA && !window.vantaEffect) {
        window.vantaEffect = window.VANTA.WAVES({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#000", 
          shininess: 20.0,
          waveHeight: 4.0,
          waveSpeed: 0.8,
          backgroundColor: "#000", 
        });
      }
    };

    const interval = setInterval(() => {
      if (window.VANTA) {
        clearInterval(interval);
        initVanta();
      }
    }, 300);

    return () => {
      if (window.vantaEffect) window.vantaEffect.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div id="vanta-bg" className="home-page"></div>
    </>
  );
}
