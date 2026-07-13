import Link from "next/link";
import { navLinks, practiceInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-lux-border bg-lux-moss-deep text-lux-foam">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-tight text-white">Lux Therapy</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-lux-mist">
            A group practice offering warm, evidence-based mental health care for
            individuals, couples, and families.
          </p>
          <p className="mt-4 text-sm text-lux-mist">{practiceInfo.telehealthNote}</p>
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
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Practice Hours
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
            © {new Date().getFullYear()} Lux Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
