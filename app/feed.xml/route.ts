import { threads, getThreadPath } from "../threads/threadData";
import { absoluteUrl, authorName, siteDescription, siteName } from "../seo/site";

export const revalidate = 3600;

export function GET() {
  const items = [...threads]
    .sort((left, right) => right.publishDate.localeCompare(left.publishDate))
    .map(
      (thread) => `
        <item>
          <title><![CDATA[${thread.title}]]></title>
          <link>${absoluteUrl(getThreadPath(thread))}</link>
          <guid>${absoluteUrl(getThreadPath(thread))}</guid>
          <pubDate>${new Date(`${thread.publishDate}T00:00:00.000Z`).toUTCString()}</pubDate>
          <description><![CDATA[${thread.subtitle}]]></description>
          <category><![CDATA[${thread.categoryLabel}]]></category>
          <author>${authorName}</author>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title><![CDATA[${siteName} Threads]]></title>
        <link>${absoluteUrl("/threads")}</link>
        <description><![CDATA[${siteDescription}]]></description>
        <language>en</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}