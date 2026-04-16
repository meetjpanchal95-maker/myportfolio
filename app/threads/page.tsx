import ContactUs from "../../components/ContactUs";
import SectionShell from "../../components/SectionShell";
import Threads from "../../components/Threads";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Threads | Writing on Architecture, UX, Research, and Culture",
  description:
    "Read categorized threads by Meet Panchal on architecture, sustainable futures, user experience, art, research, and cross-disciplinary thinking.",
  path: "/threads",
  keywords: [
    "Meet Panchal threads",
    "architecture writing",
    "UX writing",
    "research notes",
    "culture and art essays",
  ],
});

export default function ThreadsPage() {
  return (
    <SectionShell title="Threads" subtitle="Categorized threads and blog-style notes" isProjectPage={true}>
      <Threads />
      <ContactUs />
    </SectionShell>
  );
}