import type { Metadata } from "next";
import { buildThreadMetadata } from "../../../seo/metadata";

export const metadata: Metadata = buildThreadMetadata("research", "C6A");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
