import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "onDark";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-lux-accent text-lux-paper shadow-sm hover:bg-lux-accent-hover hover:-translate-y-0.5 hover:shadow-md",
  secondary:
    "bg-white/90 text-lux-moss-deep border border-lux-border hover:bg-lux-foam hover:border-lux-sage",
  ghost:
    "bg-transparent text-lux-moss underline-offset-4 hover:underline hover:text-lux-moss-deep",
  inverse:
    "bg-white text-lux-moss-deep shadow-sm hover:bg-lux-foam hover:-translate-y-0.5 hover:shadow-md",
  onDark:
    "border border-white/70 bg-white/10 text-white shadow-none backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-moss ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
