import { TherapistForm } from "@/components/admin/TherapistForm";

export const metadata = {
  title: "Add therapist",
};

type NewTherapistPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function NewTherapistPage({
  searchParams,
}: NewTherapistPageProps) {
  const { error } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Add therapist</h1>
      <p className="mt-1 text-sm text-black/60">
        Profiles appear on the public therapists page when marked active.
      </p>
      <div className="mt-6">
        <TherapistForm error={error ?? null} />
      </div>
    </div>
  );
}
