import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshitgulati.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harshit Gulati | Passionate Software Developer",
    template: "%s | Harshit Gulati",
  },
  description:
    "Harshit Gulati is a software developer and final-year B.Tech student specializing in React, Next.js, C++, and QML. Explore my projects, blog, and development labs.",
  keywords: [
    "Harshit Gulati",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "C++ Developer",
    "QML Developer",
    "Web Developer",
    "B.Tech Student",
  ],
  authors: [{ name: "Harshit Gulati", url: siteUrl }],
  creator: "Harshit Gulati",
  icons: {
    icon: "/favicon.ico",
    apple: "/web-app-manifest-512x512.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Harshit Gulati Portfolio",
    title: "Harshit Gulati | Passionate Software Developer",
    description:
      "Harshit Gulati is a software developer specializing in React, Next.js, C++, and QML. Explore my projects, blog, and development labs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harshit Gulati Portfolio Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Gulati | Passionate Software Developer",
    description:
      "Harshit Gulati is a software developer specializing in React, Next.js, C++, and QML. Explore my projects, blog, and development labs.",
    images: ["/og-image.jpg"],
    creator: "@harshitWrld",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Harshit Gulati",
        "url": siteUrl,
        "sameAs": [
          "https://github.com/harshit-gulati",
          "https://www.linkedin.com/in/harshit-gulati/",
          "https://x.com/harshitWrld"
        ],
        "jobTitle": "Software Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "RNT Health Insights",
          "url": "https://www.rntinsights.com/"
        },
        "description": "Software developer focused on building modern, responsive, and user-first web applications using React, Next.js, C++, and QML."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Harshit Gulati Portfolio",
        "publisher": {
          "@id": `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main
              className={`${montserrat.className} relative z-0 bg-white antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-neutral-100)]/5`}
            >
              <Toaster position="bottom-center" />
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
