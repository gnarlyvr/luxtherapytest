import { createPublicClient } from "@/lib/supabase/public";

export const SOCIAL_PLATFORMS = [
  { platform: "instagram", label: "Instagram" },
  { platform: "facebook", label: "Facebook" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "youtube", label: "YouTube" },
  { platform: "tiktok", label: "TikTok" },
  { platform: "x", label: "X" },
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]["platform"];

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type SocialLinksMap = Record<SocialPlatform, string>;

const emptySocialLinks = (): SocialLinksMap => ({
  instagram: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  tiktok: "",
  x: "",
});

function normalizeSocialLinks(value: unknown): SocialLinksMap {
  const base = emptySocialLinks();
  if (!value || typeof value !== "object") return base;

  const record = value as Record<string, unknown>;
  for (const { platform } of SOCIAL_PLATFORMS) {
    const href = record[platform];
    base[platform] = typeof href === "string" ? href.trim() : "";
  }
  return base;
}

export function socialLinksFromMap(map: SocialLinksMap): SocialLink[] {
  return SOCIAL_PLATFORMS.map(({ platform, label }) => ({
    platform,
    label,
    href: map[platform] ?? "",
  })).filter((link) => Boolean(link.href));
}

export async function getSocialLinksMap(): Promise<SocialLinksMap> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "social_links")
      .maybeSingle();

    if (error) {
      console.error("Failed to load social links:", error.message);
      return emptySocialLinks();
    }
    return normalizeSocialLinks(data?.value);
  } catch (error) {
    console.error("Failed to load social links:", error);
    return emptySocialLinks();
  }
}

export async function getActiveSocialLinks(): Promise<SocialLink[]> {
  const map = await getSocialLinksMap();
  return socialLinksFromMap(map);
}
