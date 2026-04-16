export const siteUrl = "https://meetpanchal.com";
export const siteName = "Meet Panchal";
export const siteDescription =
  "Meet Panchal is a cross-disciplinary strategist sharing portfolio case studies, research, and short-form writing across business, design, architecture, product, and technology.";
export const defaultOgImage = "/og-image.png";
export const authorName = "Meet Panchal";
export const authorPath = "/about";

export const staticSitePages = [
  "/",
  "/about",
  "/work",
  "/playground",
  "/threads",
  "/contact",
  "/book-meeting",
] as const;

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function normalizeDescription(
  description: string,
  fallbackSuffix = "Explore more on meetpanchal.com."
) {
  const normalized = description.replace(/\s+/g, " ").trim();

  if (normalized.length >= 140 && normalized.length <= 160) {
    return normalized;
  }

  if (normalized.length < 140) {
    const separator = /[.!?]$/.test(normalized) ? " " : ". ";
    const extended = `${normalized}${separator}${fallbackSuffix}`.replace(/\s+/g, " ").trim();

    if (extended.length <= 160) {
      return extended;
    }

    return trimToLength(extended, 160);
  }

  return trimToLength(normalized, 160);
}

function trimToLength(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  const trimmed = value.slice(0, maxLength - 1);
  const lastSpaceIndex = trimmed.lastIndexOf(" ");
  const safeTrimmed = lastSpaceIndex > 120 ? trimmed.slice(0, lastSpaceIndex) : trimmed;

  return `${safeTrimmed.replace(/[\s,.!?;:-]+$/g, "")}.`;
}

export function slugifyString(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function pickSocialImage(...candidates: Array<string | undefined>) {
  const asset = candidates.find((candidate) => {
    if (!candidate) {
      return false;
    }

    return /\.(png|jpe?g|webp|gif)$/i.test(candidate);
  });

  return asset ?? defaultOgImage;
}

export function buildKeywordList(parts: Array<string | undefined>) {
  return Array.from(
    new Set(
      parts
        .flatMap((part) => (part ? part.split("|") : []))
        .map((part) => part.trim())
        .filter(Boolean)
    )
  );
}

export function sentenceFromPipes(value: string) {
  return value
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(", ");
}