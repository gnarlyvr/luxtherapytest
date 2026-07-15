"use client";

import { useCallback, useEffect, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import {
  getCroppedImageBlob,
  revokeIfBlobUrl,
} from "@/lib/crop-image";
import { createClient } from "@/lib/supabase/client";

const BUCKET = "therapist-photos";
const ASPECT = 4 / 3;

type TherapistPhotoFieldProps = {
  name?: string;
  initialUrl?: string;
  therapistId?: string;
};

export function TherapistPhotoField({
  name = "image",
  initialUrl = "",
  therapistId,
}: TherapistPhotoFieldProps) {
  const [imageUrl, setImageUrl] = useState(initialUrl);
  const [source, setSource] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setImageUrl(initialUrl);
  }, [initialUrl]);

  useEffect(() => {
    return () => revokeIfBlobUrl(source);
  }, [source]);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  function closeCropper() {
    revokeIfBlobUrl(source);
    setSource(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCroppedArea(null);
  }

  async function openFile(file: File | null) {
    if (!file) return;
    setError(null);
    revokeIfBlobUrl(source);
    setSource(URL.createObjectURL(file));
    setZoom(1);
    setCrop({ x: 0, y: 0 });
  }

  async function openExisting() {
    if (!imageUrl.trim()) {
      setError("Add or upload a photo first.");
      return;
    }
    setError(null);
    revokeIfBlobUrl(source);

    // Prefer a same-origin proxy so Squarespace/CDN images can be cropped
    // without CORS failures when exporting the canvas.
    try {
      const response = await fetch(
        `/api/admin/image-proxy?url=${encodeURIComponent(imageUrl.trim())}`,
      );
      if (!response.ok) {
        throw new Error("Could not load the current photo for cropping.");
      }
      const blob = await response.blob();
      setSource(URL.createObjectURL(blob));
      setZoom(1);
      setCrop({ x: 0, y: 0 });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not open photo.");
    }
  }

  async function saveCrop() {
    if (!source || !croppedArea) return;
    setPending(true);
    setError(null);

    try {
      const blob = await getCroppedImageBlob(source, croppedArea);
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("You must be signed in to upload photos.");
      }

      const path = `${therapistId || user.id}/${Date.now()}.jpg`;
      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(path, blob, {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (uploadError) throw new Error(uploadError.message);

      const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
      setImageUrl(data.publicUrl);
      closeCropper();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Upload failed. Confirm the therapist-photos storage bucket exists.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="space-y-3">
      <input type="hidden" name={name} value={imageUrl} />

      <div className="flex flex-wrap items-start gap-4">
        <div className="h-28 w-36 overflow-hidden rounded-lg border border-black/10 bg-black/[0.03]">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="Therapist preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-black/40">
              No photo
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="inline-flex cursor-pointer rounded-md border border-black/15 px-3 py-2 text-sm font-medium hover:bg-black/[0.03]">
            Upload photo
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(event) => openFile(event.target.files?.[0] ?? null)}
            />
          </label>
          <button
            type="button"
            onClick={openExisting}
            disabled={!imageUrl}
            className="block rounded-md border border-black/15 px-3 py-2 text-sm font-medium hover:bg-black/[0.03] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Crop current photo
          </button>
          {imageUrl ? (
            <button
              type="button"
              onClick={() => setImageUrl("")}
              className="block text-sm text-red-700 hover:underline"
            >
              Remove photo
            </button>
          ) : null}
        </div>
      </div>

      <label className="block text-sm font-medium">
        Photo URL
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="https://… or upload above"
          className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm outline-none focus:border-black/40"
        />
      </label>

      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {source ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white p-4 shadow-xl sm:p-6">
            <h3 className="text-lg font-semibold">Crop photo</h3>
            <p className="mt-1 text-sm text-black/60">
              Drag to reposition. Use zoom to frame the portrait (4:3).
            </p>
            <div className="relative mt-4 h-72 overflow-hidden rounded-lg bg-black/90 sm:h-96">
              <Cropper
                image={source}
                crop={crop}
                zoom={zoom}
                aspect={ASPECT}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <label className="mt-4 block text-sm">
              Zoom
              <input
                type="range"
                min={1}
                max={3}
                step={0.05}
                value={zoom}
                onChange={(event) => setZoom(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={closeCropper}
                disabled={pending}
                className="rounded-md border border-black/15 px-4 py-2 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveCrop}
                disabled={pending || !croppedArea}
                className="rounded-md bg-[#4A3728] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
              >
                {pending ? "Uploading…" : "Save cropped photo"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
