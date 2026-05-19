"use client";

import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatThreadDate, getThreadPath, type ThreadPost } from "../app/threads/threadData";
import GettyEmbedBlock from "./GettyEmbedBlock";
import type { ThreadFeaturedMedia } from "./ThreadFeaturedMedia";
import TitleBlock from "./shared/titleBlock";

export interface ThreadPlaceholderPageProps {
  thread: ThreadPost;
  relatedThreads: ThreadPost[];
  articleBody?: React.ReactNode;
  featuredMedia?: ThreadFeaturedMedia;
  sidebarContent?: React.ReactNode;
}

export default function ThreadPlaceholderPage({
  thread,
  relatedThreads,
  articleBody,
  featuredMedia,
  sidebarContent,
}: ThreadPlaceholderPageProps) {
  const breadcrumbItems = [
    {
      key: "home",
      content: (
        <Link href="/" className="transition-colors duration-200 hover:text-[var(--color-text-primary)]">
          Home
        </Link>
      ),
    },
    {
      key: "home-separator",
      content: "/",
      ariaHidden: true,
    },
    {
      key: "threads",
      content: (
        <Link href="/threads" className="transition-colors duration-200 hover:text-[var(--color-text-primary)]">
          Threads
        </Link>
      ),
    },
    {
      key: "threads-separator",
      content: "/",
      ariaHidden: true,
    },
    {
      key: `category-${thread.category}`,
      content: thread.categoryLabel,
      className: "text-[var(--color-text-primary)]",
    },
  ];

  const renderFeaturedMediaItem = (
    media: Exclude<ThreadFeaturedMedia, { type: "gallery" | "pair" }>,
    className?: string,
  ) => {
    if (media.type === "getty") {
      return (
        <GettyEmbedBlock
          id={media.embed.id}
          href={media.embed.href}
          sig={media.embed.sig}
          item={media.embed.item}
          width={media.embed.width}
          height={media.embed.height}
          caption={media.embed.caption}
          tld={media.embed.tld}
          is360={media.embed.is360}
          className={`${media.embed.className ?? ""} ${className ?? ""}`.trim()}
          zoomScale={media.embed.zoomScale}
          transformOrigin={media.embed.transformOrigin}
        />
      );
    }

    return (
      <div
        className={`overflow-hidden rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_92%,var(--color-page-bg))] ${className ?? ""}`.trim()}
      >
        <Image
          src={media.src}
          alt={media.alt}
          width={1200}
          height={630}
          unoptimized
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="relative">
      <hr className="border-border-custom border-b-[3px]" />
      <TitleBlock
        title="Threads"
        subtitle="A categorized library of short-form ideas"
        detailedMode={true}
        link="/threads"
      />

      <hr className="border-border-custom border-b-[3px]" />
      <div className="border-l-[3px] border-r-[3px] border-border-custom py-10 sm:mx-16 mx-4">
        <article className="flex w-full max-w-none flex-col gap-8 px-[10px] text-left">
          <nav aria-label="Breadcrumb" className="pt-2">
            <ol className="flex flex-wrap items-center gap-2 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">
              {Children.toArray(
                breadcrumbItems.map((item) => (
                  <li
                    key={item.key}
                    aria-hidden={item.ariaHidden ? true : undefined}
                    className={item.className}
                  >
                    {item.content}
                  </li>
                ))
              )}
            </ol>
          </nav>

          <header className="flex flex-col gap-4 text-left">
            <p className="font-source-code text-xs uppercase tracking-[0.2em] text-light-gray sm:text-sm">
              {thread.categoryLabel} • {formatThreadDate(thread.publishDate)}
            </p>
            <h1 className="font-bebasNeue text-[1.9rem] leading-none text-theme-text sm:text-[3rem]">
              {thread.title}
            </h1>
            <p className="w-full max-w-none text-left font-montserrat text-base leading-7 text-theme-text/85 sm:text-lg">
              {thread.subtitle}
            </p>
          </header>

          <section aria-label="Thread media" className="flex flex-col gap-4">
            {featuredMedia?.type === "pair" ? (
              <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
                {Children.toArray([
                  <div key="pair-primary">
                    {renderFeaturedMediaItem(featuredMedia.primary, "h-full")}
                  </div>,
                  <div key="pair-secondary">
                    {renderFeaturedMediaItem(featuredMedia.secondary, "h-full")}
                  </div>,
                ])}
              </div>
            ) : featuredMedia?.type === "gallery" ? (
              <div
                className={`grid gap-4 md:items-stretch ${
                  featuredMedia.items.length >= 3 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {Children.toArray(
                  featuredMedia.items.map((item) => (
                    <div key={item.type === "getty" ? item.embed.id : item.src}>
                      {renderFeaturedMediaItem(item, "h-full")}
                    </div>
                  ))
                )}
              </div>
            ) : featuredMedia ? (
              renderFeaturedMediaItem(featuredMedia)
            ) : (
              <div className="overflow-hidden rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_92%,var(--color-page-bg))]">
                <Image
                  src={thread.image}
                  alt={`Feature image for ${thread.title}`}
                  width={1200}
                  height={630}
                  unoptimized
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
          </section>

          <section
            aria-labelledby={articleBody ? undefined : "thread-summary-heading"}
            aria-label={articleBody ? "Thread content" : undefined}
            className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
          >
            <div className="flex flex-col gap-4 text-left">
              {!articleBody ? (
                <h2 id="thread-summary-heading" className="text-left font-bebasNeue text-4xl text-theme-text sm:text-5xl">
                  Summary
                </h2>
              ) : null}
              {articleBody ? (
                articleBody
              ) : (
                <>
                  <p className="text-left font-montserrat text-base leading-7 text-theme-text/85">
                    {thread.subtitle} This post sits inside {thread.categoryLabel}, a thread series focused on {thread.categorySubtitle.toLowerCase()}.
                  </p>
                  <p className="text-left font-montserrat text-base leading-7 text-theme-text/85">
                    Explore the related posts below for connected ideas, adjacent case studies, and more writing tied to {thread.tags[0]?.toLowerCase() ?? "this topic"}.
                  </p>
                </>
              )}
            </div>

            <aside className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_94%,var(--color-page-bg))] p-5">
              <h2 className="font-bebasNeue text-3xl text-theme-text">TAGS</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {Children.toArray(
                  thread.tags.map((tag, tagIndex) => (
                    <li
                      key={`${thread.id}-tag-${tagIndex}`}
                      className="rounded-full border border-[var(--color-text-accent)] px-3 py-1 font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray"
                    >
                      {tag}
                    </li>
                  ))
                )}
              </ul>
              {sidebarContent ? <div className="mt-6 border-t border-[var(--color-text-accent)] pt-6">{sidebarContent}</div> : null}
            </aside>
          </section>

          {relatedThreads.length > 0 ? (
            <aside aria-labelledby="related-threads-heading" className="pb-2">
              <h2 id="related-threads-heading" className="text-left font-bebasNeue text-4xl text-theme-text sm:text-5xl">
                Related Threads
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {Children.toArray(
                  relatedThreads.map((relatedThread, relatedIndex) => (
                    <Link
                      key={`${relatedThread.id}-${relatedIndex}`}
                      href={getThreadPath(relatedThread)}
                      className="group relative block overflow-hidden rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_94%,var(--color-page-bg))] p-4 text-left transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[var(--color-hover-bg)] hover:bg-[color:color-mix(in_srgb,var(--color-main-bg)_82%,var(--color-page-bg))] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-[0.985]"
                    >
                      <div className="absolute inset-0 opacity-30">
                        <Image
                          src={relatedThread.image}
                          alt={`Background image for ${relatedThread.title}`}
                          fill
                          unoptimized
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--color-main-bg)_82%,transparent)]" />
                      <div className="relative z-10">
                        <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                          {relatedThread.categoryLabel}
                        </p>
                        <h3 className="mt-2 font-montserrat text-base font-semibold leading-6 text-theme-text transition-colors duration-200 group-hover:text-[var(--color-hover-bg)]">
                          {relatedThread.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 font-montserrat text-sm leading-6 text-theme-text/80 transition-colors duration-200 group-hover:text-theme-text/95">
                          {relatedThread.subtitle}
                        </p>
                        <p className="mt-3 font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray transition-colors duration-200 group-hover:text-[var(--color-text-primary)]">
                          {formatThreadDate(relatedThread.publishDate)}
                        </p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </aside>
          ) : null}
        </article>
      </div>
    </div>
  );
}