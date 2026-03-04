/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://meetpanchal.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/playground', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://meetpanchal.com/sitemap.xml',
    ],
  },
};
