"use client";
import React, { useEffect, useState } from "react";
import "./aasaan.css";

const TOTAL_SQUARES = 10;
const DELAY = 300; // ms
const DURATION = 100; // ms

const svgPaths = Array.from({ length: TOTAL_SQUARES }, (_, i) => `/projects/aasaan/${String(i + 1).padStart(2, '0')}.svg`);

export default function LogoAnimation() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TOTAL_SQUARES);
    }, DELAY + DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-animation-container">
      <div className="logo-animation-svg-wrapper">
        <img src={svgPaths[active]} alt={`logo-square-${active + 1}`} className="logo-animation-svg" />
      </div>
    </div>
  );
}
