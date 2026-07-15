"use client";

import Link from "next/link";
import {
  createTherapist,
  deleteTherapist,
  updateTherapist,
} from "@/app/admin/actions";
import { TherapistPhotoField } from "@/components/admin/TherapistPhotoField";
import { contentToParagraphs } from "@/lib/blog-shared";
import type { Therapist } from "@/lib/therapist-shared";

type TherapistFormProps = {
  therapist?: Therapist;
  notice?: string | null;
  error?: string | null;
};

const fieldClass =
  "mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm outline-none focus:border-black/40";
const labelClass = "block text-sm font-medium";

export function TherapistForm({ therapist, notice, error }: TherapistFormProps) {
  const action = therapist ? updateTherapist : createTherapist;

  return (
    <form
      action={action}
      className="space-y-5 rounded-xl border border-black/10 bg-white p-6 shadow-sm"
    >
      {therapist ? (
        <input type="hidden" name="id" value={therapist.id} />
      ) : null}

      {notice ? (
        <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {notice}
        </p>
      ) : null}
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <label className={labelClass}>
        Full name
        <input
          name="name"
          required
          defaultValue={therapist?.name ?? ""}
          className={fieldClass}
        />
      </label>

      {!therapist ? (
        <label className={labelClass}>
          ID (optional)
          <input
            name="id"
            placeholder="auto-from-name"
            className={fieldClass}
          />
          <span className="mt-1 block text-xs font-normal text-black/50">
            Used in URLs/admin references. Leave blank to auto-generate.
          </span>
        </label>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Credentials
          <input
            name="credentials"
            defaultValue={therapist?.credentials ?? ""}
            placeholder="LICSW"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Role
          <input
            name="role"
            defaultValue={therapist?.role ?? "Therapist"}
            className={fieldClass}
          />
        </label>
      </div>

      <div>
        <p className={labelClass}>Photo</p>
        <div className="mt-2">
          <TherapistPhotoField
            initialUrl={therapist?.image ?? ""}
            therapistId={therapist?.id}
          />
        </div>
      </div>

      <label className={labelClass}>
        Short statement
        <textarea
          name="statement"
          rows={3}
          defaultValue={therapist?.statement ?? ""}
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Full bio
        <span className="mt-1 block text-xs font-normal text-black/50">
          Separate paragraphs with a blank line.
        </span>
        <textarea
          name="bio"
          rows={12}
          defaultValue={
            therapist ? contentToParagraphs(therapist.bio) : ""
          }
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Specializations (comma-separated)
        <input
          name="specializations"
          defaultValue={therapist?.specializations.join(", ") ?? ""}
          className={fieldClass}
        />
      </label>

      <fieldset>
        <legend className="text-sm font-medium">Formats</legend>
        <div className="mt-2 flex flex-wrap gap-4 text-sm">
          {(["Virtual", "In-person"] as const).map((format) => (
            <label key={format} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="formats"
                value={format}
                defaultChecked={
                  therapist?.formats.includes(format) ?? format === "Virtual"
                }
              />
              {format}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Sort order
          <input
            name="sortOrder"
            type="number"
            defaultValue={therapist?.sortOrder ?? 0}
            className={fieldClass}
          />
        </label>
        <label className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            name="isActive"
            defaultChecked={therapist?.isActive ?? true}
          />
          Active on public site
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="rounded-md bg-[#4A3728] px-4 py-2.5 text-sm font-semibold text-white"
        >
          {therapist ? "Save changes" : "Add therapist"}
        </button>
        <Link
          href="/admin/therapists"
          className="rounded-md border border-black/15 px-4 py-2.5 text-sm font-medium"
        >
          Cancel
        </Link>
        {therapist ? (
          <button
            formAction={deleteTherapist}
            formNoValidate
            className="ml-auto rounded-md border border-red-200 px-4 py-2.5 text-sm font-medium text-red-700"
            onClick={(e) => {
              if (
                !confirm(
                  "Remove this therapist? Blog posts they authored will keep the text name but lose the linked profile photo.",
                )
              ) {
                e.preventDefault();
              }
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </form>
  );
}
