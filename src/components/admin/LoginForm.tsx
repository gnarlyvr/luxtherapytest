"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type LoginFormProps = {
  next: string;
};

export function LoginForm({ next }: LoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setPending(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.replace(next);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          className="w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:border-black/40"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Password</span>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:border-black/40"
        />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-[#4A3728] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
