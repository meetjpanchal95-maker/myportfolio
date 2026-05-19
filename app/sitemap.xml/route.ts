import type { MetadataRoute } from "next";
import { threads, getThreadPath } from "../threads/threadData";
import workProjects from "../work/projectList";
import playgroundProjects from "../playground/playgroundProjects";
import { absoluteUrl, staticSitePages } from "../seo/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

function createStaticEntry(path: string): SitemapEntry {
  return {
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  };
}

function createProjectEntry(link: string): SitemapEntry {
  return {
    url: absoluteUrl(link),
    changeFrequency: "monthly",
    priority: 0.7,
  };
}

function createThreadEntry(thread: (typeof threads)[number]): SitemapEntry {
  const date = new Date(`${thread.publishDate}T00:00:00.000Z`);
  return {
    url: absoluteUrl(getThreadPath(thread)),
    lastModified: isNaN(date.getTime()) ? undefined : date,
    changeFrequency: "monthly",
    priority: 0.75,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: SitemapEntry[] = staticSitePages.map(createStaticEntry);
  const workEntries: SitemapEntry[] = workProjects
    .filter((project) => typeof project.link === "string" && project.link)
    .map((project) => createProjectEntry(project.link!));
  const playgroundEntries: SitemapEntry[] = playgroundProjects
    .filter((project) => typeof project.link === "string" && project.link)
    .map((project) => createProjectEntry(project.link!));
  const threadEntries: SitemapEntry[] = threads.map(createThreadEntry);
  return [...staticEntries, ...workEntries, ...playgroundEntries, ...threadEntries];
}
