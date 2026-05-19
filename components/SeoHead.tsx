export interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}

export default function SeoHead({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: SeoHeadProps): React.ReactNode {
  // Metadata is now generated through the App Router metadata API.
  // This component stays in place so legacy head.tsx files do not break route builds.
  return null;
}