import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = {
  title: "Login",
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { next, error } = await searchParams;

  return (
    <div className="mx-auto max-w-md rounded-xl border border-black/10 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">Admin login</h1>
      <p className="mt-2 text-sm text-black/60">
        Sign in with the email and password from your Supabase Auth user.
      </p>
      {error ? (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error === "invalid"
            ? "Invalid email or password."
            : "Unable to sign in. Try again."}
        </p>
      ) : null}
      <LoginForm next={next && next.startsWith("/admin") ? next : "/admin/blog"} />
    </div>
  );
}
