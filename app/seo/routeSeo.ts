import playgroundProjects from "../playground/playgroundProjects";
import { getThreadBySlug } from "../threads/threadData";
import workProjects from "../work/projectList";
import { buildKeywordList, normalizeDescription, pickSocialImage, sentenceFromPipes } from "./site";

function titleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getWorkSeo(slug: string) {
  const project = workProjects.find((item) => item.link === `/work/${slug}`);

  if (!project) {
    return null;
  }

  const subtitle = sentenceFromPipes(project.subtitle ?? "Portfolio Project");
  const title = `${project.title} | Meet Panchal Work`;
  const description = normalizeDescription(
    `${project.title} is a Meet Panchal portfolio project focused on ${subtitle}. Explore the case study, design process, project strategy, and delivery outcomes.`
  );

  return {
    title,
    description,
    imagePath: pickSocialImage(project.src, project.hoverSrc),
    keywords: buildKeywordList([
      project.title,
      project.subtitle,
      "Meet Panchal",
      "portfolio project",
      "case study",
    ]),
  };
}

export function getPlaygroundSeo(slug: string) {
  const project = playgroundProjects.find((item) => item.link === `/playground/${slug}`);

  if (!project) {
    return null;
  }

  const headline = sentenceFromPipes(project.description).split(",")[0] || titleCaseFromSlug(slug);
  const title = `${headline} | Meet Panchal Playground`;
  const description = normalizeDescription(
    `${headline} is a Meet Panchal playground project exploring ${sentenceFromPipes(project.description)}. Review the concept, visual process, and experimental outcomes.`
  );

  return {
    title,
    description,
    imagePath: pickSocialImage(project.src, project.hoverSrc),
    keywords: buildKeywordList([
      headline,
      project.description,
      project.hoverText,
      "Meet Panchal",
      "playground project",
      "design exploration",
    ]),
  };
}

export function getThreadSeo(categorySlug: string, threadSlug: string) {
  const thread = getThreadBySlug(threadSlug);

  if (!thread || thread.category !== categorySlug) {
    return null;
  }

  const title = `${thread.title} | ${thread.categoryLabel} | Meet Panchal Threads`;
  const description = normalizeDescription(
    `${thread.title}. ${thread.subtitle} Part of ${thread.categoryLabel}, a Meet Panchal thread about ${thread.categorySubtitle.toLowerCase()}.`
  );

  return {
    title,
    description,
    pathSlug: thread.slug,
    imagePath: thread.image,
    keywords: buildKeywordList([
      thread.title,
      thread.categoryLabel,
      thread.categorySubtitle,
      thread.subtitle,
      ...thread.tags,
      "Meet Panchal",
      "thread",
    ]),
  };
}