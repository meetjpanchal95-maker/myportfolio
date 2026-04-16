import type { ReactNode } from "react";
import type { ThreadFeaturedMedia } from "../../components/ThreadFeaturedMedia";
import { threadArticleBody as C1A, threadFeaturedMedia as C1AMedia, threadSidebarContent as C1ASidebar } from "./archipreneurs/C1A/page";
import { threadArticleBody as C1B, threadFeaturedMedia as C1BMedia, threadSidebarContent as C1BSidebar } from "./archipreneurs/C1B/page";
import { threadArticleBody as C1C, threadFeaturedMedia as C1CMedia, threadSidebarContent as C1CSidebar } from "./archipreneurs/C1C/page";
import { threadArticleBody as C2A, threadFeaturedMedia as C2AMedia, threadSidebarContent as C2ASidebar } from "./sustainable-futures/C2A/page";
import { threadArticleBody as C2B, threadFeaturedMedia as C2BMedia, threadSidebarContent as C2BSidebar } from "./sustainable-futures/C2B/page";
import { threadArticleBody as C2C, threadFeaturedMedia as C2CMedia, threadSidebarContent as C2CSidebar } from "./sustainable-futures/C2C/page";
import { threadArticleBody as C3A, threadFeaturedMedia as C3AMedia, threadSidebarContent as C3ASidebar } from "./beyond-spaces/C3A/page";
import { threadArticleBody as C3B, threadFeaturedMedia as C3BMedia, threadSidebarContent as C3BSidebar } from "./beyond-spaces/C3B/page";
import { threadArticleBody as C3C, threadFeaturedMedia as C3CMedia, threadSidebarContent as C3CSidebar } from "./beyond-spaces/C3C/page";
import { threadArticleBody as C4A, threadFeaturedMedia as C4AMedia, threadSidebarContent as C4ASidebar } from "./user-experience/C4A/page";
import { threadArticleBody as C4B, threadFeaturedMedia as C4BMedia, threadSidebarContent as C4BSidebar } from "./user-experience/C4B/page";
import { threadArticleBody as C4C, threadFeaturedMedia as C4CMedia, threadSidebarContent as C4CSidebar } from "./user-experience/C4C/page";
import { threadArticleBody as C5A, threadFeaturedMedia as C5AMedia, threadSidebarContent as C5ASidebar } from "./artlook/C5A/page";
import { threadArticleBody as C5B, threadFeaturedMedia as C5BMedia, threadSidebarContent as C5BSidebar } from "./artlook/C5B/page";
import { threadArticleBody as C5C, threadFeaturedMedia as C5CMedia, threadSidebarContent as C5CSidebar } from "./artlook/C5C/page";
import { threadArticleBody as C6A, threadFeaturedMedia as C6AMedia, threadSidebarContent as C6ASidebar } from "./research/C6A/page";
import { threadArticleBody as C6B, threadFeaturedMedia as C6BMedia, threadSidebarContent as C6BSidebar } from "./research/C6B/page";
import { threadArticleBody as C6C, threadFeaturedMedia as C6CMedia, threadSidebarContent as C6CSidebar } from "./research/C6C/page";

export const threadArticleBodyById: Record<string, ReactNode> = {
  C1A,
  C1B,
  C1C,
  C2A,
  C2B,
  C2C,
  C3A,
  C3B,
  C3C,
  C4A,
  C4B,
  C4C,
  C5A,
  C5B,
  C5C,
  C6A,
  C6B,
  C6C,
};

export const threadFeaturedMediaById: Record<string, ThreadFeaturedMedia> = {
  C1A: C1AMedia,
  C1B: C1BMedia,
  C1C: C1CMedia,
  C2A: C2AMedia,
  C2B: C2BMedia,
  C2C: C2CMedia,
  C3A: C3AMedia,
  C3B: C3BMedia,
  C3C: C3CMedia,
  C4A: C4AMedia,
  C4B: C4BMedia,
  C4C: C4CMedia,
  C5A: C5AMedia,
  C5B: C5BMedia,
  C5C: C5CMedia,
  C6A: C6AMedia,
  C6B: C6BMedia,
  C6C: C6CMedia,
};

export const threadSidebarContentById: Partial<Record<string, ReactNode>> = {
  C1A: C1ASidebar,
  C1B: C1BSidebar,
  C1C: C1CSidebar,
  C2A: C2ASidebar,
  C2B: C2BSidebar,
  C2C: C2CSidebar,
  C3A: C3ASidebar,
  C3B: C3BSidebar,
  C3C: C3CSidebar,
  C4A: C4ASidebar,
  C4B: C4BSidebar,
  C4C: C4CSidebar,
  C5A: C5ASidebar,
  C5B: C5BSidebar,
  C5C: C5CSidebar,
  C6A: C6ASidebar,
  C6B: C6BSidebar,
  C6C: C6CSidebar,
};