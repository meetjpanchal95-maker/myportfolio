import SectionShell from "../../components/SectionShell";
import CalendlyEmbed from "./calendly-widget";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Book a Meeting | Meet Panchal",
  description:
    "Book a meeting with Meet Panchal to discuss collaborations, consulting, product strategy, design direction, architecture, research, or cross-disciplinary projects.",
  path: "/book-meeting",
  keywords: [
    "book a meeting with Meet Panchal",
    "strategy consultation",
    "design consultation",
    "architecture consultation",
    "project discovery call",
  ],
});

export default function BookMeetingPage() {
  return (
    <SectionShell
      id="meeting"
      title="Book a Meeting"
      subtitle="Schedule a consultation with our BIM and Construction experts. Pick a convenient time using the calendar below."
    >
      <div className="grid md:grid-cols-2 gap-6 items-center 2xl:mt-[-70px] md:mt-0 ">
        <div className="col-span-1 h-[500px] bg-[url('/meeting.jpg')] bg-cover rounded-current shadow-lg" />
        <div className="col-span-1 w-full">
          <CalendlyEmbed />
        </div>
      </div>
    </SectionShell>
  );
}
