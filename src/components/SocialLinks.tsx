import type { ComponentType, ReactNode, SVGProps } from "react";
import type { SocialLink, SocialPlatform } from "@/lib/site-settings";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function BrandIcon({
  size = 18,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.323.975.975 1.261 2.242 1.323 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.348 2.633-1.323 3.608-.975.975-2.242 1.261-3.608 1.323-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.261-2.242-1.323-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.348-2.633 1.323-3.608C4.531 2.581 5.798 2.295 7.164 2.233 8.43 2.175 8.81 2.163 12 2.163zm0 1.802c-3.15 0-3.501.012-4.735.069-1.035.047-1.597.219-1.972.594-.374.374-.546.937-.593 1.972-.057 1.234-.069 1.585-.069 4.735s.012 3.501.069 4.735c.047 1.035.219 1.597.593 1.972.375.375.937.547 1.972.593 1.234.057 1.585.069 4.735.069s3.501-.012 4.735-.069c1.035-.046 1.597-.218 1.972-.593.375-.375.547-.937.593-1.972.057-1.234.069-1.585.069-4.735s-.012-3.501-.069-4.735c-.046-1.035-.218-1.597-.593-1.972-.375-.375-.937-.547-1.972-.593-1.234-.057-1.585-.069-4.735-.069zm0 3.086a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.802a3.148 3.148 0 1 0 0 6.296 3.148 3.148 0 0 0 0-6.296zm6.406-3.845a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
    </BrandIcon>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.1H13.5V9.1c0-.9.2-1.5 1.6-1.5h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.6V14h2.5v8h3.4z" />
    </BrandIcon>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5zM7 8.75H3.5V20H7zm4.67 0H8.2V20h3.47v-5.9c0-1.56.3-3.07 2.24-3.07 1.91 0 1.94 1.78 1.94 3.17V20H19v-6.45c0-3.17-.68-5.6-4.39-5.6-1.78 0-2.97.97-3.46 1.9h-.05V8.75z" />
    </BrandIcon>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </BrandIcon>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.4a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.43a8.16 8.16 0 0 0 4.76 1.52V7.5a4.85 4.85 0 0 1-1-.81z" />
    </BrandIcon>
  );
}

function XIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </BrandIcon>
  );
}

const icons: Record<SocialPlatform, ComponentType<IconProps>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  x: XIcon,
};

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
  variant?: "dark" | "light";
};

export function SocialLinks({
  links,
  className = "",
  variant = "dark",
}: SocialLinksProps) {
  if (links.length === 0) return null;

  const active =
    variant === "dark"
      ? "border-white/25 text-white hover:border-white/50 hover:bg-white/10"
      : "border-lux-border text-lux-moss-deep hover:border-lux-sage hover:bg-lux-sage/20";

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {links.map((item) => {
        const Icon = icons[item.platform];
        return (
          <li key={item.platform}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`New Aviv on ${item.label}`}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${active}`}
            >
              <Icon size={18} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
