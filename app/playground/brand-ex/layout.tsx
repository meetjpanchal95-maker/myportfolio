import type { Metadata } from "next";
import { buildPlaygroundMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildPlaygroundMetadata("brand-ex");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
