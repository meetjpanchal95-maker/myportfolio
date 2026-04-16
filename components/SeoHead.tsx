export default function SeoHead({
  title: _title,
  description: _description,
  path: _path,
  keywords: _keywords = [],
  type: _type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}) {
  // Metadata is now generated through the App Router metadata API.
  // This component stays in place so legacy head.tsx files do not break route builds.
  return null;
}