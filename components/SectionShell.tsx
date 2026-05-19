"use client";

import PageHeader from "./PageHeader";

export interface SectionShellProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  isProjectPage?: boolean;
  includePageHeading?: boolean;
}

export default function SectionShell({
  id,
  title,
  subtitle,
  children,
  isProjectPage = false,
  includePageHeading = true,
}: SectionShellProps) {
  return (
    <section id={id} className="w-full mx-auto py-16">
      {title && includePageHeading ? <h1 className="sr-only">{title}</h1> : null}
      {isProjectPage ? null : <PageHeader />}
      <div>{children}</div>
    </section>
  );
}
