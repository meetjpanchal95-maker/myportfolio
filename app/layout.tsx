import "./globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro, Bebas_Neue, Montserrat } from "next/font/google";
import LayoutScrollArea from "../components/LayoutScrollArea";
import { absoluteUrl, defaultOgImage, siteDescription, siteName, siteUrl } from "./seo/site";
import { ThemeProvider } from "./theme/ThemeProvider";
import { ThemeScript } from "./theme/theme-script";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebasNeue",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meet Panchal",
  url: "https://meetpanchal.com",
  telephone: "+91 9191919191",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad",
    addressLocality: "Ahmedabad",
    postalCode: "380001",
    addressCountry: "IN",
  },
  image: "https://meetpanchal.com/logo.png",
  sameAs: ["https://www.linkedin.com/company/meetpanchal/"],
};

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Portfolio`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Creative strategist",
    "Digital Transformation Enthusiast",
    "Project Management Expert",
    "Business Analyst",
    "UX Designer",
    "Architect",
    "Product strategy portfolio",
    "Architecture portfolio",
    "Design case studies",
    "UX research portfolio",
  ],
  authors: [{ name: "Meet Panchal", url: "https://meetpanchal.com" }],
  creator: "Meet Panchal",
  publisher: "Meet Panchal",
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Meet Panchal | Portfolio",
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} | Portfolio`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Portfolio`,
    description: siteDescription,
    images: [defaultOgImage],
    creator: "@meetpanchal", // optional, if you have a Twitter handle
  },

  alternates: {
    canonical: "https://meetpanchal.com",
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${sourceCodePro.variable} ${montserrat.variable} ${bebasNeue.variable}`}
    >
      <head>
        <ThemeScript />
        {/* Global WebSite schema for search engines and social parsers. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
              description: siteDescription,
              publisher: {
                "@type": "Person",
                name: siteName,
                url: absoluteUrl("/about"),
              },
            }),
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-screen bg-theme-page overflow-hidden">
        <div className="fixed border border-theme-page rounded-xl pointer-events-none z-50" />
        <ThemeProvider>
          <LayoutScrollArea>{children}</LayoutScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
