import type { Metadata } from "next";
import { buildThreadMetadata } from "../../../seo/metadata";

export const metadata: Metadata = buildThreadMetadata("beyond-spaces", "C3A");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
