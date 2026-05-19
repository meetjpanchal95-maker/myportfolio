"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GettyEmbedBlock from "./GettyEmbedBlock";
import { formatThreadDate, getThreadPath, type ThreadPost } from "../app/threads/threadData";

const m: any = motion;

function removeDashes(value: string) {
  return value.replace(/[-–—]/g, " ").replace(/\s+/g, " ").trim();
}

export interface ThreadCardProps {
  thread: ThreadPost;
  index: number;
}

export default function ThreadCard({ thread, index }: ThreadCardProps) {
  const router = useRouter();
  const threadPath = getThreadPath(thread);
  const usesEmbeddedThumbnail = Boolean(thread.gettyEmbed);
  const cardTitle = removeDashes(thread.title);
  const cardSubtitle = removeDashes(thread.subtitle);

  const cardContent = (
    <>
      <m.article
        className="flex cursor-pointer flex-col gap-2 rounded-current border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] p-2 transition-[border-color,background-color,box-shadow] duration-200 group-hover:border-[var(--color-hover-bg)] group-hover:bg-[color:color-mix(in_srgb,var(--color-main-bg)_62%,var(--color-page-bg))] group-hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)] md:flex-row md:items-stretch"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45, delay: index * 0.03 }}
      >
        <div className="relative w-full overflow-hidden rounded-[16px] md:w-[208px] md:min-w-[208px] flex md:flex-col md:h-auto md:justify-stretch p-0 m-0">
          {usesEmbeddedThumbnail ? (
            <GettyEmbedBlock
              id={thread.gettyEmbed.id}
              href={thread.gettyEmbed.href}
              sig={thread.gettyEmbed.sig}
              item={thread.gettyEmbed.item}
              width={208}
              height={117}
              caption={false}
              tld={thread.gettyEmbed.tld}
              is360={thread.gettyEmbed.is360}
              className="h-full w-full rounded-none border-0 bg-transparent p-0"
              zoomScale={1}
              disableLink={true}
            />
          ) : (
            <Image
              src={thread.image}
              alt={`Cover image for ${cardTitle}`}
              fill
              unoptimized
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 208px"
              className="object-cover h-full w-full p-0 m-0"
              style={{ minHeight: '100%', height: '100%', width: '100%', padding: 0, margin: 0 }}
            />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between md:min-h-[117px]">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 font-montserrat text-[14px] font-medium leading-[1.2] text-theme-text transition-colors duration-200 group-hover:text-[var(--color-hover-bg)] sm:text-[15px]">
                {cardTitle}
              </h3>
              <p className="mt-1 font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray transition-colors duration-200 group-hover:text-[var(--color-text-primary)]">
                {formatThreadDate(thread.publishDate)}
              </p>
            </div>
            <p className="mt-0.5 shrink-0 font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray transition-colors duration-200 group-hover:text-[var(--color-text-primary)]">
              {thread.categoryLabel}
            </p>
          </div>

          <p className="mt-1 line-clamp-2 max-w-3xl overflow-hidden font-montserrat text-[12px] leading-[1.3] text-theme-text/85 transition-colors duration-200 group-hover:text-theme-text sm:text-[13px]">
            {cardSubtitle}
          </p>

          <div className="mt-1.5 flex flex-wrap content-start gap-1.5 md:mt-auto">
            {thread.tags.map((tag) => (
              <span
                key={`${thread.id}-${tag}`}
                className="max-w-full rounded-full border border-[var(--color-text-accent)] px-2 py-[3px] font-source-code text-[9px] uppercase tracking-[0.12em] text-light-gray transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </m.article>
    </>
  );

  if (usesEmbeddedThumbnail) {
    return (
      <div
        role="link"
        tabIndex={0}
        className="group block"
        onClick={() => router.push(threadPath)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            router.push(threadPath);
          }
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={threadPath} className="group block">
      {cardContent}
    </Link>
  );
}