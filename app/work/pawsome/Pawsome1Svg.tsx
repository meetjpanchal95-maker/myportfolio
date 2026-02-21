import fs from "fs";
import path from "path";

/**
 * Renders pawsome1.svg inline so that html[data-theme] CSS selectors
 * inside the SVG's own <style> block respond to the portfolio theme toggle.
 * (An <img> tag sandboxes the SVG; inline rendering makes it part of the DOM.)
 */
export default function Pawsome1Svg() {
  const svgPath = path.join(process.cwd(), "public/projects/pawsome/pawsome1.svg");
  const svgContent = fs.readFileSync(svgPath, "utf8");

  return (
    <div
      style={{ width: "100%", height: "auto" }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
