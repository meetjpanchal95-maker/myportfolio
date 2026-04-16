import type { Metadata } from "next";
import { buildPlaygroundMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildPlaygroundMetadata("transitional-space");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
