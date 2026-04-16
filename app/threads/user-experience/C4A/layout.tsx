import type { Metadata } from "next";
import { buildThreadMetadata } from "../../../seo/metadata";

export const metadata: Metadata = buildThreadMetadata("user-experience", "C4A");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
