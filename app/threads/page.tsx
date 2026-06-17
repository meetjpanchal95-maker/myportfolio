import ContactUs from "../../components/ContactUs";
import SectionShell from "../../components/SectionShell";
import Threads from "../../components/Threads";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Threads | Short-Form Ideas For Professionals",
  description:
    "A publication that helps professionals build cross-disciplinary thinking through simple, real-life examples.",
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
    <SectionShell title="Threads ( Coming soon )" subtitle="Cross-disciplinary thinking for professionals" isProjectPage={true}>
      <Threads hideTitleBlockButton />
      <ContactUs />
    </SectionShell>
  );
}