import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks, practiceInfo } from "@/data/site";
import { getActiveSocialLinks } from "@/lib/site-settings";

export async function Footer() {
  const socialLinks = await getActiveSocialLinks();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-lux-border bg-lux-moss-deep text-lux-foam">
      <div className="relative border-b border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-lux-mist">
              Get occasional mental health insights on hope, relationships, and
              healing - never spam, always easy to unsubscribe.
            </p>
          </div>
          <div className="w-full lg:max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Logo variant="light" className="h-12" width={180} height={54} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-lux-mist">
            {practiceInfo.tagline} Compassionate counseling for young adults,
            couples, and families - primarily virtual, with a Massachusetts office
            for in-person sessions.
          </p>
          <p className="mt-4 text-sm text-lux-mist">{practiceInfo.telehealthNote}</p>
          {socialLinks.length > 0 ? (
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                Follow us
              </p>
              <SocialLinks
                links={socialLinks}
                className="mt-3"
                variant="dark"
              />
            </div>
          ) : null}
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-lux-mist transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-lux-mist transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/no-suprises-act"
                className="text-sm text-lux-mist transition-colors hover:text-white"
              >
                No Surprises Act
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-lux-mist">
            {practiceInfo.hours.map((item) => (
              <li key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span className="text-right text-white/90">{item.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-lux-mist">
            {practiceInfo.address.line1}
            <br />
            {practiceInfo.address.line2}
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`tel:${practiceInfo.phone.replace(/\D/g, "")}`}
              className="text-white transition-colors hover:text-lux-mist"
            >
              {practiceInfo.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs leading-relaxed text-lux-mist sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <p>
            If you are experiencing a mental health emergency, call or text{" "}
            <strong className="text-white">988</strong> (Suicide &amp; Crisis
            Lifeline), or dial <strong className="text-white">911</strong>. This
            website is not monitored for crisis communication.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {practiceInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
