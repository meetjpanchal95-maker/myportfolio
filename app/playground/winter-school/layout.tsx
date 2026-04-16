import type { Metadata } from "next";
import { buildPlaygroundMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildPlaygroundMetadata("winter-school");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
