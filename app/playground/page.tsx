import Playground from "../../components/Playground";
import SectionShell from "../../components/SectionShell";
import playgroundProjects from "./playgroundProjects";
import ContactUs from "../../components/ContactUs";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Playground | Research, Experiments, and Design Explorations",
  description:
    "Explore Meet Panchal's playground of speculative work, research explorations, architecture studies, cultural projects, and interdisciplinary experiments.",
  path: "/playground",
  keywords: [
    "Meet Panchal playground",
    "design explorations",
    "architecture research",
    "creative experiments",
    "cultural projects",
  ],
});
export default function PlaygroundPage() {
  return (
    <SectionShell title="Playground" subtitle="cross-disciplinary explorations">
      <Playground detailedMode={true} projects={playgroundProjects} />
      <ContactUs />
    </SectionShell>
  );
}
