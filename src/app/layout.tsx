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
    default: "Harshit Gulati | Software Engineer & Builder",
    template: "%s | Harshit Gulati",
  },
  description:
    "Harshit Gulati is a Software Engineer and Aerospace Engineering graduate (CS minor) from PEC, building high-performance C++/QML desktop systems and modern web applications.",
  keywords: [
    "Harshit Gulati",
    "Software Engineer",
    "Aerospace Engineering",
    "Computer Science Minor",
    "PEC Chandigarh",
    "Qt Developer",
    "QML Developer",
    "C++ Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
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
    title: "Harshit Gulati | Software Engineer & Builder",
    description:
      "Harshit Gulati is a Software Engineer and Aerospace Engineering graduate (CS minor) from PEC, building high-performance C++/QML desktop systems and modern web applications.",
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
    title: "Harshit Gulati | Software Engineer & Builder",
    description:
      "Harshit Gulati is a Software Engineer and Aerospace Engineering graduate (CS minor) from PEC, building high-performance C++/QML desktop systems and modern web applications.",
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
        "jobTitle": "Software Engineer",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Punjab Engineering College (PEC)"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "RNT Health Insights",
          "url": "https://www.rntinsights.com/"
        },
        "description": "Software engineer and Aerospace Engineering graduate (CS minor) from PEC, engineering real-time C++/QML medical software and modern web applications."
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
