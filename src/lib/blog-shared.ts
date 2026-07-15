export type BlogPostStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorCredentials: string;
  authorId: string | null;
  tags: string[];
  image: string;
  status: BlogPostStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export function formatPostDate(date: string | null) {
  if (!date) return "Draft";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Draft";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function paragraphsToContent(value: string): string[] {
  return value
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

export function contentToParagraphs(content: string[]): string {
  return content.join("\n\n");
}
