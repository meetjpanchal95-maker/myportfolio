import type { Metadata } from "next";
import { buildThreadMetadata } from "../../../seo/metadata";

export const metadata: Metadata = buildThreadMetadata("sustainable-futures", "C2C");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
