import type { MetadataRoute } from "next";
import { threads, getThreadPath } from "./threads/threadData";
import workProjects from "./work/projectList";
import playgroundProjects from "./playground/playgroundProjects";
import { absoluteUrl, staticSitePages } from "./seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticSitePages.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const workEntries = workProjects
    .filter((project) => project.link)
    .map((project) => ({
      url: absoluteUrl(project.link as string),
      changeFrequency: "monthly",
      priority: 0.7,
    })) satisfies MetadataRoute.Sitemap;

  const playgroundEntries = playgroundProjects
    .filter((project) => project.link)
    .map((project) => ({
      url: absoluteUrl(project.link as string),
      changeFrequency: "monthly",
      priority: 0.7,
    })) satisfies MetadataRoute.Sitemap;

  const threadEntries = threads.map((thread) => ({
    url: absoluteUrl(getThreadPath(thread)),
    lastModified: new Date(`${thread.publishDate}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.75,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...workEntries, ...playgroundEntries, ...threadEntries];
}