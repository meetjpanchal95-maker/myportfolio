import type { Metadata } from "next";
import HomeSections from "../components/HomeSections";
import playgroundProjects from "./playground/playgroundProjects";
import { buildStaticPageMetadata } from "./seo/metadata";

export const metadata: Metadata = buildStaticPageMetadata({
  title: "Meet Panchal | Portfolio",
  description:
    "Explore Meet Panchal's portfolio across strategy, design, architecture, product thinking, research, and cross-disciplinary work shaped for real outcomes.",
  path: "/",
  keywords: [
    "Meet Panchal portfolio",
    "strategy portfolio",
    "design and architecture portfolio",
    "product thinking",
    "research-led projects",
  ],
});

export default function Home() {
  return <HomeSections playgroundProjects={playgroundProjects} />;
}
