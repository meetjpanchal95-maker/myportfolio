import SectionShell from "../../components/SectionShell";
import AboutDetail from "../../components/AboutDetail";
import CareerTimeline from "../../components/CareerTimeline";
import ContactUs from "../../components/ContactUs";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "About | Meet Panchal",
  description:
    "Read Meet Panchal's background, experience, education, and skills across architecture, product, design, research, and business strategy work.",
  path: "/about",
  keywords: [
    "Meet Panchal bio",
    "Meet Panchal CV",
    "architecture and UX background",
    "product strategy experience",
    "design research skills",
  ],
});

export default function AboutPage() {
  return (
    <SectionShell title="About" subtitle="Curriculum Vitae">
      <AboutDetail />
      
      <ContactUs />
    </SectionShell>
  );
}
