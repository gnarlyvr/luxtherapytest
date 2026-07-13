export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/therapists", label: "Meet our Therapists" },
  { href: "/employment", label: "Employment" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const practiceInfo = {
  name: "Lux Therapy",
  tagline: "Compassionate care for every chapter of healing",
  phone: "(555) 014-2280",
  email: "hello@luxtherapy.com",
  fax: "(555) 014-2281",
  careersEmail: "careers@luxtherapy.com",
  address: {
    line1: "1847 Willow Creek Avenue, Suite 210",
    line2: "Portland, OR 97205",
  },
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 7:00 PM" },
    { day: "Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM (select clinicians)" },
    { day: "Sunday", time: "Closed" },
  ],
  telehealthNote:
    "In-person sessions available at our Portland office. Secure telehealth offered throughout Oregon.",
};
