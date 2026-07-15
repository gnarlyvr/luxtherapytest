"use client";

import { signOut } from "@/app/admin/actions";

export function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="text-sm text-black/60 transition-colors hover:text-black"
      >
        Sign out
      </button>
    </form>
  );
}
