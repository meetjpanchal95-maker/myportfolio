"use client";

import { useEffect, useState } from "react";

/**
 * Fetches pawsome1.svg client-side and renders it inline so that
 * html[data-theme] CSS selectors inside the SVG's own <style> block
 * respond to the portfolio theme toggle.
 *
 * Client-side fetching prevents the 9MB+ SVG from being embedded in the
 * pre-rendered HTML, which would exceed Vercel's 20MB ISR page size limit.
 */
export default function Pawsome1Svg() {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch("/projects/pawsome/pawsome1.svg")
      .then((res) => res.text())
      .then((text) => setSvgContent(text))
      .catch((err) => console.error("Failed to load pawsome1.svg", err));
  }, []);

  if (!svgContent) return <div style={{ width: "100%", height: "auto" }} />;

  return (
    <div
      style={{ width: "100%", height: "auto" }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
