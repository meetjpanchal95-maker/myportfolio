import type { Metadata } from "next";
import { buildPlaygroundMetadata } from "../../seo/metadata";

export const metadata: Metadata = buildPlaygroundMetadata("bairro");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
