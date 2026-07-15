export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/therapists", label: "Meet our Therapists" },
  { href: "/blog", label: "Blog" },
  { href: "/employment", label: "Employment" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const practiceInfo = {
  name: "New Aviv",
  tagline: "Hope. Care. Healing.",
  quote: "Where flowers bloom so does hope.",
  quoteAttribution: "Lady Bird Johnson",
  nameMeaning: {
    title: 'New Aviv means "New Spring"',
    body: [
      "With each new Spring, we look forward to new life and warmth. New possibilities.",
      "A new hope for happiness, healthiness, and continued happy relationships.",
    ],
  },
  phone: "(857) 284-8639",
  email: "contact@newaviv.com",
  fax: "",
  careersEmail: "contact@newaviv.com",
  website: "https://www.newaviv.com",
  address: {
    line1: "240 Elm St, Floor 2",
    line2: "Somerville, Massachusetts 27713",
  },
  hours: [
    { day: "Virtual appointments", time: "Primary option" },
    { day: "In-person (Somerville)", time: "By appointment" },
  ],
  telehealthNote:
    "Most appointments are virtual. In-person sessions are available at our Somerville, Massachusetts office when that format is a better fit.",
  virtualPrimaryNote:
    "Virtual care is our primary format. In-person appointments can be scheduled at our office in Somerville, Massachusetts.",
};

/** Paste each account URL below. Empty hrefs stay in the layout as inactive spots. */
export const socialLinks = [
  { platform: "instagram", label: "Instagram", href: "" },
  { platform: "facebook", label: "Facebook", href: "" },
  { platform: "linkedin", label: "LinkedIn", href: "" },
  { platform: "youtube", label: "YouTube", href: "" },
  { platform: "tiktok", label: "TikTok", href: "" },
  { platform: "x", label: "X", href: "" },
] as const;

export type SocialPlatform = (typeof socialLinks)[number]["platform"];
