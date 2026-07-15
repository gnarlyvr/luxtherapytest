import type { BlogAuthor, Therapist, TherapistFormat } from "@/lib/therapist-shared";
import { createPublicClient } from "@/lib/supabase/public";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/blog-shared";

export type { BlogAuthor, Therapist, TherapistFormat } from "@/lib/therapist-shared";

type TherapistRow = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  specializations: string[] | null;
  formats: string[] | null;
  statement: string;
  bio: string[] | null;
  sort_order: number;
  is_active: boolean;
};

function asFormats(value: string[] | null): TherapistFormat[] {
  const allowed = new Set(["In-person", "Virtual"]);
  return (value ?? []).filter((item): item is TherapistFormat =>
    allowed.has(item),
  );
}

function mapRow(row: TherapistRow): Therapist {
  return {
    id: row.id,
    name: row.name,
    credentials: row.credentials ?? "",
    role: row.role ?? "Therapist",
    image: row.image ?? "",
    specializations: row.specializations ?? [],
    formats: asFormats(row.formats),
    statement: row.statement ?? "",
    bio: row.bio ?? [],
    sortOrder: row.sort_order ?? 0,
    isActive: Boolean(row.is_active),
  };
}

export function specialtiesFromTherapists(therapists: Therapist[]): string[] {
  return Array.from(
    new Set(therapists.flatMap((t) => t.specializations)),
  ).sort();
}

export async function getActiveTherapists(): Promise<Therapist[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("therapists")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to load therapists:", error.message);
    return [];
  }
  return ((data as TherapistRow[]) ?? []).map(mapRow);
}

export async function getAllTherapistsForAdmin(): Promise<Therapist[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("therapists")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(error.message);
  return ((data as TherapistRow[]) ?? []).map(mapRow);
}

export async function getTherapistByIdForAdmin(
  id: string,
): Promise<Therapist | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("therapists")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? mapRow(data as TherapistRow) : null;
}

export async function getActiveTherapistsForSelect(): Promise<BlogAuthor[]> {
  const therapists = await getActiveTherapists();
  return therapists.map((t) => ({
    id: t.id,
    name: t.name,
    credentials: t.credentials,
    image: t.image,
    role: t.role,
  }));
}

/** For admin blog form (includes inactive so old posts still resolve). */
export async function getTherapistsForAuthorSelect(): Promise<BlogAuthor[]> {
  const therapists = await getAllTherapistsForAdmin();
  return therapists.map((t) => ({
    id: t.id,
    name: t.name,
    credentials: t.credentials,
    image: t.image,
    role: t.role,
  }));
}

export function buildTherapistId(name: string, existingId?: string) {
  if (existingId?.trim()) return slugify(existingId);
  return slugify(name);
}
