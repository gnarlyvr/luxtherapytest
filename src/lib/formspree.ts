function formspreeEndpoint(formId: string | undefined, label: string) {
  const id = formId?.trim();
  if (!id) {
    throw new Error(
      `Missing ${label}. Add it to .env.local and your host environment variables.`,
    );
  }

  if (id.startsWith("http")) {
    return id;
  }

  return `https://formspree.io/f/${id}`;
}

export function getContactFormspreeEndpoint() {
  return formspreeEndpoint(
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID,
    "NEXT_PUBLIC_FORMSPREE_CONTACT_ID",
  );
}

export function getEmploymentFormspreeEndpoint() {
  return formspreeEndpoint(
    process.env.NEXT_PUBLIC_FORMSPREE_EMPLOYMENT_ID,
    "NEXT_PUBLIC_FORMSPREE_EMPLOYMENT_ID",
  );
}

export async function submitToFormspree(
  endpoint: string,
  formData: FormData,
): Promise<{ ok: true } | { ok: false; message: string }> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean;
      error?: string;
      errors?: Array<{ message?: string }>;
    } | null;

    if (!response.ok) {
      const message =
        payload?.error ||
        payload?.errors?.[0]?.message ||
        "Something went wrong. Please try again or email us directly.";
      return { ok: false, message };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "Unable to send right now. Please try again or email us directly.",
    };
  }
}
