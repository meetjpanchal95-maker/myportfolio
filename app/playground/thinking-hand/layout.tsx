import type { Metadata } from "next";
import { buildPlaygroundMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildPlaygroundMetadata("thinking-hand");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
