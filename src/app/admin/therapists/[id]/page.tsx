import { notFound } from "next/navigation";
import { TherapistForm } from "@/components/admin/TherapistForm";
import { getTherapistByIdForAdmin } from "@/lib/therapists";

export const metadata = {
  title: "Edit therapist",
};

type EditTherapistPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
};

export default async function EditTherapistPage({
  params,
  searchParams,
}: EditTherapistPageProps) {
  const { id } = await params;
  const { saved, error } = await searchParams;
  const therapist = await getTherapistByIdForAdmin(id);
  if (!therapist) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Edit therapist</h1>
      <p className="mt-1 text-sm text-black/60">
        Update bio, photo, specialties, and visibility.
      </p>
      <div className="mt-6">
        <TherapistForm
          therapist={therapist}
          notice={saved ? "Saved." : null}
          error={error ?? null}
        />
      </div>
    </div>
  );
}
