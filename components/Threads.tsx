"use client";

import { useState } from "react";
import {
  sortThreadsByDateDesc,
  threadCategories,
  threadCategoryDefinitions,
  threads,
  type ThreadCategory,
} from "../app/threads/threadData";
import ThreadCard from "./ThreadCard";
import TitleBlock from "./shared/titleBlock";

const THREADS_PER_PAGE = 4;

export interface ThreadsProps {
  hideTitleBlockButton?: boolean;
}

export interface ThreadsProps {
  hideTitleBlockButton?: boolean;
}

export default function Threads({ hideTitleBlockButton = false }: ThreadsProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof threadCategories)[number] | ThreadCategory>("All");
  const [hoveredCategory, setHoveredCategory] = useState<ThreadCategory | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const highlightedCategory =
    hoveredCategory ??
    (activeCategory === "All" ? threadCategoryDefinitions[0].key : activeCategory);

  const highlightedCategoryMeta = threadCategoryDefinitions.find(
    (category) => category.key === highlightedCategory
  );

  const filteredThreads =
    activeCategory === "All"
      ? threads
      : threads.filter((thread) => thread.category === activeCategory);

  const orderedThreads = [...filteredThreads].sort(sortThreadsByDateDesc);
  const totalThreads = orderedThreads.length;
  const totalPages = Math.max(1, Math.ceil(totalThreads / THREADS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages - 1);
  const startIndex = totalThreads === 0 ? 0 : safePage * THREADS_PER_PAGE + 1;
  const endIndex = Math.min(totalThreads, (safePage + 1) * THREADS_PER_PAGE);
  const visibleThreads = orderedThreads.slice(
    safePage * THREADS_PER_PAGE,
    (safePage + 1) * THREADS_PER_PAGE
  );

  const handleCategoryChange = (
    category: (typeof threadCategories)[number] | ThreadCategory
  ) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

  return (
    <div className="relative">
      <hr className="border-border-custom border-b-[3px] m-0 p-0" />
      <TitleBlock
        title="Threads"
        subtitle="A categorized library of short-form ideas"
        link="/threads"
        hideButton={hideTitleBlockButton}
      />
      <hr className="border-border-custom border-b-[3px] m-0 p-0" />
      <div className="border-l-[3px] border-r-[3px] border-border-custom py-4 sm:mx-16 mx-4">
        <div
          className="flex flex-wrap justify-between w-full gap-2 sm:gap-4 px-4 sm:px-6"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <button
            type="button"
            onClick={() => handleCategoryChange("All")}
            onMouseEnter={() => setHoveredCategory(null)}
            className={`rounded-full border px-4 py-2 font-source-code text-sm uppercase tracking-[0.14em] transition-colors duration-200 ${
              activeCategory === "All"
                ? "border-[var(--color-border-strong)] bg-[var(--color-text-primary)] text-[var(--color-main-bg)]"
                : "border-[var(--color-text-accent)] bg-transparent text-light-gray hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            All
          </button>
          {threadCategoryDefinitions.map((category) => {
            const isActive = activeCategory === category.key;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => handleCategoryChange(category.key)}
                onMouseEnter={() => setHoveredCategory(category.key)}
                className={`rounded-full border px-4 py-2 font-source-code text-sm uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive
                    ? "border-[var(--color-border-strong)] bg-[var(--color-text-primary)] text-[var(--color-main-bg)]"
                    : "border-[var(--color-text-accent)] bg-transparent text-light-gray hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 px-4 sm:px-6">
          <div className="flex min-h-[40px] flex-col gap-3 pt-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="font-source-code text-sm uppercase tracking-[0.16em] text-light-gray">
              <span
                key={highlightedCategoryMeta?.key ?? "all"}
                className="inline-block animate-pulse"
              >
                {activeCategory === "All" && !hoveredCategory
                  ? "Browse all thread categories"
                  : highlightedCategoryMeta?.subtitle}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">
                {`Showing ${startIndex}-${endIndex} of total ${totalThreads}`}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
                  disabled={safePage === 0}
                  className="rounded-full border border-[var(--color-text-accent)] px-3 py-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages - 1, page + 1))}
                  disabled={safePage >= totalPages - 1}
                  className="rounded-full border border-[var(--color-text-accent)] px-3 py-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 px-4 sm:px-6">
          {visibleThreads.map((thread, index) => (
            <ThreadCard key={thread.id} thread={thread} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}