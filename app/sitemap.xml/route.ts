
import { threads, getThreadPath } from "../threads/threadData";
import workProjects from "../work/projectList";
import playgroundProjects from "../playground/playgroundProjects";
import { absoluteUrl, staticSitePages } from "../seo/site";

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'\"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const urls: string[] = [];
  staticSitePages.forEach((path: string) => {
    urls.push(absoluteUrl(path));
  });
  workProjects.forEach((project: any) => {
    if (typeof project.link === "string" && project.link) {
      urls.push(absoluteUrl(project.link));
    }
  });
  playgroundProjects.forEach((project: any) => {
    if (typeof project.link === "string" && project.link) {
      urls.push(absoluteUrl(project.link));
    }
  });
  threads.forEach((thread: any) => {
    urls.push(absoluteUrl(getThreadPath(thread)));
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join("\n") +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
