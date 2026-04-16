import type { Metadata } from "next";
import ThreadPageShell from "../../../components/ThreadPageShell";
import { buildThreadMetadata } from "../../seo/metadata";
import { threadArticleBodyById, threadFeaturedMediaById, threadSidebarContentById } from "../pageContentRegistry";
import { getThreadBySlug, threads } from "../threadData";

export function generateStaticParams() {
  return threads.map((thread) => ({ slug: thread.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildThreadMetadata("", slug);
}

export default async function ThreadDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thread = getThreadBySlug(slug);

  return <ThreadPageShell threadSlug={slug} articleBody={thread ? threadArticleBodyById[thread.id] : undefined} featuredMedia={thread ? threadFeaturedMediaById[thread.id] : undefined} sidebarContent={thread ? threadSidebarContentById[thread.id] : undefined} />;
}