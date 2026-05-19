import SectionShell from "../../components/SectionShell";
import ContactUs from "../../components/ContactUs";
import { buildStaticPageMetadata } from "../seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Sitemap | Portfolio Structure",
  description:
    "Visual sitemap of Meet Panchal's portfolio website, showing the main sections and their relationships.",
  path: "/sitemap",
  keywords: [
    "Meet Panchal sitemap",
    "portfolio structure",
    "site map",
    "website navigation",
  ],
});

export default function SitemapPage() {
  return (
    <SectionShell title="Sitemap" subtitle="portfolio structure">
      <div className="flex flex-col items-center w-full py-8">
        <div className="bg-dark-charcoal rounded-xl p-6 w-full max-w-3xl overflow-x-auto border border-border-custom mb-8">
          <pre className="text-theme-main text-base leading-6 font-mono whitespace-pre-wrap">
{`
Home
├── Work
│   ├── [Project Pages]
├── Playground
│   ├── [Playground Projects]
├── About
│   ├── Content
│   ├── Detailed Pages
├── Threads
│   ├── [Thread Categories]
├── Contact
├── Sitemap
├── Robots
├── Feed.xml
`}
          </pre>
        </div>
        <p className="mb-8 text-lg text-theme-muted max-w-2xl text-center">
          This diagram shows the main sections of the portfolio and how they are organized. Use the navigation menu or quick links below to explore each section.
        </p>
      </div>
      <ContactUs />
    </SectionShell>
  );
}
