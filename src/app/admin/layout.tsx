import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | New Aviv Admin",
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-[#F4F1EC] text-[#2F241C]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link href="/admin/blog" className="text-sm font-semibold tracking-wide">
              New Aviv Admin
            </Link>
            <nav className="flex gap-4 text-sm text-black/60">
              <Link href="/admin/blog" className="hover:text-black">
                Blog
              </Link>
              <Link href="/admin/settings" className="hover:text-black">
                Site settings
              </Link>
              <Link href="/" className="hover:text-black">
                View site
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
