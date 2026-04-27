import Work from "../../components/Work";
import SectionShell from "../../components/SectionShell";
import ContactUs from "../../components/ContactUs";
import { buildStaticPageMetadata } from "../seo/metadata";
import workProjects from "./projectList";

export const metadata = buildStaticPageMetadata({
  title: "Work | Recent rojects",
  description:
    "Browse Meet Panchal's work portfolio with case studies in product strategy, digital transformation, architecture, consulting, and cross-functional delivery.",
  path: "/work",
  keywords: [
    "Meet Panchal work",
    "product strategy case studies",
    "architecture projects",
    "digital transformation portfolio",
    "UX and business consulting",
  ],
});
export default function WorkPage() {
  return (
    <SectionShell title="Work" subtitle="A selection of recent projects">
      <Work projects={workProjects} detailedMode={true} />
      <ContactUs />
    </SectionShell>
  );
}
