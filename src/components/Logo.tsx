import Image from "next/image";
import { practiceInfo } from "@/data/site";

type LogoProps = {
  /** `dark` forces charcoal on light backgrounds; `light` keeps the white mark for dark surfaces */
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function Logo({
  variant = "dark",
  className = "",
  priority = false,
  width = 160,
  height = 48,
}: LogoProps) {
  const filterClass = variant === "dark" ? "logo-on-light" : "";

  return (
    <Image
      src="/logo.png"
      alt={practiceInfo.name}
      width={width}
      height={height}
      className={`h-auto w-auto object-contain ${filterClass} ${className}`}
      priority={priority}
    />
  );
}
