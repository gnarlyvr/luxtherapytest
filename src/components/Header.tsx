"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, practiceInfo } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-lux-border/70 bg-[color-mix(in_srgb,var(--lux-paper)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          aria-label={`${practiceInfo.name} home`}
        >
          <Logo variant="dark" className="h-10 sm:h-12" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                  active
                    ? "bg-lux-foam font-semibold text-lux-moss-deep"
                    : "text-lux-ink-muted hover:bg-lux-foam/80 hover:text-lux-moss-deep"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-md bg-lux-accent px-4 py-2.5 text-sm font-semibold text-lux-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-accent-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-moss sm:inline-flex"
          >
            Schedule a Consultation
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-lux-border bg-white p-2 text-lux-moss-deep transition-colors hover:bg-lux-foam lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-lux-border bg-lux-paper lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-3 text-base transition-colors ${
                    active
                      ? "bg-lux-foam font-semibold text-lux-moss-deep"
                      : "text-lux-ink-muted hover:bg-lux-foam hover:text-lux-moss-deep"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-lux-accent px-3 py-3 text-center text-base font-semibold text-lux-paper transition-colors hover:bg-lux-accent-hover"
            >
              Schedule a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
