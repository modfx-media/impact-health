import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import { CtaBanner } from "@/components/site-footer/CtaBanner";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { QuickAccessBar } from "@/components/site-footer/QuickAccessBar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Care Clinic | Health & Wellness Services in Westerville, OH";
const defaultDescription =
  "Experience full-spectrum pain management at our medically-integrated care facility. We provide treatments based on Physical, Traditional, & Functional Medicine.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  // Sitewide OG/Twitter fallback — pages that set their own `openGraph`
  // (e.g. blog posts) override this per Next.js metadata field merging;
  // all other pages inherit this instead of shipping zero social-card data.
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: "Impact Health & Wellness",
    images: [{ url: "/images/impact-logo.png", width: 620, height: 199 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/impact-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yj6l83c7s1");`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes like cz-shortcut-listen onto <body> before hydration */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X7PD7NQWJF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X7PD7NQWJF');
          `}
        </Script>
        <SiteHeader />
        {children}
        <CtaBanner />
        <SiteFooter />
        <QuickAccessBar />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a997d56ba70a028e78623fb"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
