import { SocialLinksSettingsForm } from "@/components/admin/SocialLinksSettingsForm";
import { getSocialLinksMap } from "@/lib/site-settings";

export const metadata = {
  title: "Site settings",
};

type SettingsPageProps = {
  searchParams: Promise<{ saved?: string; error?: string }>;
};

export default async function AdminSettingsPage({
  searchParams,
}: SettingsPageProps) {
  const { saved, error } = await searchParams;
  const socialLinks = await getSocialLinksMap();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Site settings</h1>
      <p className="mt-1 text-sm text-black/60">
        Manage shared website options used across the public site.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Social media</h2>
        <p className="mt-1 text-sm text-black/60">
          Add profile URLs for each network you want to show.
        </p>
        <div className="mt-4">
          <SocialLinksSettingsForm
            values={socialLinks}
            notice={saved ? "Social links saved." : null}
            error={error ?? null}
          />
        </div>
      </section>
    </div>
  );
}
