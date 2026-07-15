import { updateSocialLinks } from "@/app/admin/actions";
import {
  SOCIAL_PLATFORMS,
  type SocialLinksMap,
} from "@/lib/site-settings";

type SocialLinksSettingsFormProps = {
  values: SocialLinksMap;
  notice?: string | null;
  error?: string | null;
};

const fieldClass =
  "mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm outline-none focus:border-black/40";

export function SocialLinksSettingsForm({
  values,
  notice,
  error,
}: SocialLinksSettingsFormProps) {
  return (
    <form
      action={updateSocialLinks}
      className="space-y-5 rounded-xl border border-black/10 bg-white p-6 shadow-sm"
    >
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

      <p className="text-sm text-black/60">
        Leave a field blank to hide that icon on the public site. Only URLs you
        enter will appear in the footer and on the contact page.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {SOCIAL_PLATFORMS.map(({ platform, label }) => (
          <label key={platform} className="block text-sm font-medium">
            {label}
            <input
              name={platform}
              type="text"
              inputMode="url"
              placeholder="https://"
              defaultValue={values[platform]}
              className={fieldClass}
            />
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="rounded-md bg-[#4A3728] px-4 py-2.5 text-sm font-semibold text-white"
      >
        Save social links
      </button>
    </form>
  );
}
