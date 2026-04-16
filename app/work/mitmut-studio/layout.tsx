import type { Metadata } from "next";
import { buildWorkMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildWorkMetadata("mitmut-studio");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
