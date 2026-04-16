import type { Metadata } from "next";
import { buildPlaygroundMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildPlaygroundMetadata("villa-terra");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
