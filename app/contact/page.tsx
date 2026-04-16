import SectionShell from "../../components/SectionShell";
import ContactUs from "../../components/ContactUs";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Contact | Meet Panchal",
  description:
    "Get in touch with Meet Panchal for consulting, collaborations, design strategy, architecture, UX, research, and cross-disciplinary project enquiries.",
  path: "/contact",
  keywords: [
    "Contact Meet Panchal",
    "design strategy consultation",
    "architecture enquiry",
    "UX research collaboration",
    "project consultation",
  ],
});

export default function ContactPage() {
  return (
    <SectionShell
      id="contact"
      title="Contact Us"
      subtitle="Ready to start your next project? Contact us for a consultation and quote."
    >
      <ContactUs detailedMode={true} />
    </SectionShell>
  );
}
