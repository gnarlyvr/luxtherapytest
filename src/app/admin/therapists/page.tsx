import Link from "next/link";
import { SignOutButton } from "@/components/admin/SignOutButton";
import { getAllTherapistsForAdmin } from "@/lib/therapists";

export const metadata = {
  title: "Therapists",
};

export default async function AdminTherapistsPage() {
  const therapists = await getAllTherapistsForAdmin();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Therapists</h1>
          <p className="mt-1 text-sm text-black/60">
            Manage staff profiles shown on the public therapists page and as blog
            authors.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <SignOutButton />
          <Link
            href="/admin/therapists/new"
            className="rounded-md bg-[#4A3728] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Add therapist
          </Link>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        {therapists.length === 0 ? (
          <p className="p-6 text-sm text-black/60">No therapists yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-black/10 bg-black/[0.02] text-xs uppercase tracking-wide text-black/50">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Order</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {therapists.map((therapist) => (
                <tr
                  key={therapist.id}
                  className="border-b border-black/5 last:border-0"
                >
                  <td className="px-4 py-3">
                    <div className="font-medium">
                      {therapist.name}
                      {therapist.credentials
                        ? `, ${therapist.credentials}`
                        : ""}
                    </div>
                    <div className="text-xs text-black/45">{therapist.role}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        therapist.isActive
                          ? "rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800"
                          : "rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800"
                      }
                    >
                      {therapist.isActive ? "active" : "hidden"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-black/60">{therapist.sortOrder}</td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/therapists/${therapist.id}`}
                      className="font-medium text-[#4A3728] hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
