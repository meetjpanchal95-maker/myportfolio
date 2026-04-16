import type { Metadata } from "next";
import { buildWorkMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildWorkMetadata("stackbuilder");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
