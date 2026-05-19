import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { absoluteUrl, authorName } from "../app/seo/site";
import { getRelatedThreads, getThreadBySlug, getThreadPath } from "../app/threads/threadData";
import type { ThreadFeaturedMedia } from "./ThreadFeaturedMedia";
import ContactUs from "./ContactUs";
import SectionShell from "./SectionShell";
import ThreadPlaceholderPage from "./ThreadPlaceholderPage";

export interface ThreadPageShellProps {
  threadSlug: string;
  articleBody?: React.ReactNode;
  featuredMedia?: ThreadFeaturedMedia;
  sidebarContent?: React.ReactNode;
}

export default function ThreadPageShell({
  threadSlug,
  articleBody,
  featuredMedia,
  sidebarContent,
}: ThreadPageShellProps) {
  const thread = getThreadBySlug(threadSlug);

  if (!thread) {
    notFound();
  }

  const relatedThreads = getRelatedThreads(thread);
  const threadUrl = absoluteUrl(getThreadPath(thread));
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: thread.title,
    description: thread.subtitle,
    image: [absoluteUrl(thread.image)],
    datePublished: thread.publishDate,
    dateModified: thread.publishDate,
    author: {
      "@type": "Person",
      name: authorName,
      url: absoluteUrl("/about"),
    },
    mainEntityOfPage: threadUrl,
    articleSection: thread.categoryLabel,
    keywords: thread.tags.join(", "),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Threads",
        item: absoluteUrl("/threads"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: thread.title,
        item: threadUrl,
      },
    ],
  };

  return (
    <SectionShell title="Threads" subtitle="Categorized threads and blog-style notes" isProjectPage={true} includePageHeading={false}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ThreadPlaceholderPage
        thread={thread}
        relatedThreads={relatedThreads}
        articleBody={articleBody}
        featuredMedia={featuredMedia}
        sidebarContent={sidebarContent}
      />
      <ContactUs />
    </SectionShell>
  );
}