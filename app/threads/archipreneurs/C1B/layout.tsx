import type { Metadata } from "next";
import { buildThreadMetadata } from "../../../seo/metadata";

export const metadata: Metadata = buildThreadMetadata("archipreneurs", "C1B");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
