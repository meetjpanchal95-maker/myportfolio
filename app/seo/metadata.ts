import type { Metadata } from "next";
import { absoluteUrl, authorName, defaultOgImage, normalizeDescription, siteName } from "./site";
import { getPlaygroundSeo, getThreadSeo, getWorkSeo } from "./routeSeo";

type MetadataType = "website" | "article";

function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  imagePath = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  type?: MetadataType;
  imagePath?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const normalizedDescription = normalizeDescription(description);
  const socialImageUrl = absoluteUrl(imagePath);

  return {
    title: {
      absolute: title,
    },
    description: normalizedDescription,
    keywords,
    authors: [{ name: authorName, url: absoluteUrl("/about") }],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      siteName,
      title,
      description: normalizedDescription,
      url,
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: normalizedDescription,
      images: [socialImageUrl],
    },
  };
}

export function buildStaticPageMetadata({
  title,
  description,
  path,
  keywords,
  imagePath,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  imagePath?: string;
}) {
  return buildMetadata({
    title,
    description,
    path,
    keywords,
    imagePath,
  });
}

export function buildWorkMetadata(slug: string): Metadata {
  const seo = getWorkSeo(slug);

  if (!seo) {
    return {};
  }

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/work/${slug}`,
    keywords: seo.keywords,
    imagePath: seo.imagePath,
  });
}

export function buildPlaygroundMetadata(slug: string): Metadata {
  const seo = getPlaygroundSeo(slug);

  if (!seo) {
    return {};
  }

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/playground/${slug}`,
    keywords: seo.keywords,
    imagePath: seo.imagePath,
  });
}

export function buildThreadMetadata(categorySlug: string, threadSlug: string): Metadata {
  const seo = getThreadSeo(categorySlug, threadSlug);

  if (!seo) {
    return {};
  }

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/threads/${seo.pathSlug}`,
    keywords: seo.keywords,
    type: "article",
    imagePath: seo.imagePath,
  });
}