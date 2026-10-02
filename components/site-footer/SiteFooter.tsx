import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/site-header/icons";
import { contactInfo, socialLinks } from "@/lib/nav-data";
import { AREAS_WE_SERVE_ENABLED } from "@/lib/areas-we-serve/config";

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const;

const exploreLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "Meet Our Team", href: "/our-team/" },
  { label: "Conditions We Treat", href: "/conditions-we-treat/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
  // Exactly one link to the Areas We Serve hub — never link individual
  // location pages from the footer, that creates a spam-pattern link farm.
  ...(AREAS_WE_SERVE_ENABLED
    ? [{ label: "Areas We Serve", href: "/areas-we-serve/" }]
    : []),
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Sitemap", href: "/sitemap/" },
  { label: "Contact Us", href: "/contact-us/" },
];

const officeHours = [
  { days: "Mon – Fri", hours: "8:00 AM – 5:00 PM" },
  { days: "Sat – Sun", hours: "Closed" },
];

function GoogleG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold tracking-widest text-brand-teal uppercase">
      {children}
    </h3>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_85%_0%,rgba(64,144,185,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Impact Health & Wellness home">
              <Image
                src="/images/impact-logo-white.png"
                alt="Impact Health & Wellness"
                width={620}
                height={199}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Westerville&rsquo;s trusted partner in wellness. Integrative,
              non-invasive care combining advanced medicine with regenerative
              therapies to treat the root cause.
            </p>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              <GoogleG className="h-4 w-4 shrink-0" />
              Read Our Google Reviews
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10">
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-teal"
                >
                  {contactInfo.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <a
                  href={contactInfo.phoneHref}
                  className="transition-colors hover:text-brand-teal"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <a
                  href={contactInfo.emailHref}
                  className="transition-colors hover:text-brand-teal"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-10">
            <FooterHeading>Hours</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {officeHours.map((row) => (
                <li key={row.days}>
                  <p className="font-semibold text-white/90">{row.days}</p>
                  <p className="text-white/60">{row.hours}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <FooterHeading>Follow</FooterHeading>
              <ul className="mt-4 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon =
                    socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-teal hover:text-brand-teal"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 pb-16 lg:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            &copy; Copyright {new Date().getFullYear()} Impact Health &amp;
            Wellness | All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy/"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use/"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
            <a
              href="https://modfxmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              POWERED BY MODFXMEDIA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
