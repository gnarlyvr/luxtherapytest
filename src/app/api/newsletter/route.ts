import { NextResponse, type NextRequest } from "next/server";

type MailerLiteErrorBody = {
  message?: string;
  errors?: Record<string, string[]>;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.MAILERLITE_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter signup is not configured yet." },
      { status: 503 },
    );
  }

  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = String(body.email ?? "")
      .trim()
      .toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const groupId = process.env.MAILERLITE_GROUP_ID?.trim();
  const payload: {
    email: string;
    groups?: string[];
    resubscribe?: boolean;
  } = {
    email,
    resubscribe: true,
  };

  if (groupId) {
    payload.groups = [groupId];
  }

  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 200 || response.status === 201) {
    return NextResponse.json({ ok: true });
  }

  // MailerLite often returns 200/201; treat already-subscribed style responses as success when possible
  const errorBody = (await response.json().catch(() => null)) as
    | MailerLiteErrorBody
    | null;

  if (response.status === 409) {
    return NextResponse.json({ ok: true });
  }

  const details =
    errorBody?.message ||
    (errorBody?.errors && Object.values(errorBody.errors).flat()[0]) ||
    "Unable to subscribe right now. Please try again later.";

  console.error("MailerLite subscribe failed:", response.status, errorBody);

  return NextResponse.json({ error: details }, { status: 502 });
}
