export type Service = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  icon: "user" | "heart" | "users" | "sparkles" | "video";
};

export const services: Service[] = [
  {
    id: "individual",
    title: "Individual Therapy",
    summary:
      "One-on-one support tailored to your goals—whether you're navigating anxiety, trauma, identity, or life transitions.",
    details: [
      "Evidence-based approaches including CBT, ACT, and trauma-informed care",
      "Collaborative goal setting and progress check-ins",
      "Weekly or biweekly sessions available",
    ],
    icon: "user",
  },
  {
    id: "couples",
    title: "Couples / Marriage Counseling",
    summary:
      "A steady space for partners to rebuild trust, improve communication, and grow together with intention.",
    details: [
      "Emotionally Focused Therapy (EFT) and Gottman-informed methods",
      "Support for premarital, married, and non-traditional partnerships",
      "Conflict repair and intimacy rebuilding",
    ],
    icon: "heart",
  },
  {
    id: "family",
    title: "Family Therapy",
    summary:
      "Strengthen connection across generations with guidance that honors every voice in the room.",
    details: [
      "Parent–teen communication and boundary work",
      "Blended family transitions and co-parenting support",
      "Systems-based approaches that reduce blame",
    ],
    icon: "users",
  },
  {
    id: "group",
    title: "Group Therapy Workshops",
    summary:
      "Shared healing in small, facilitated groups—community without the pressure of going it alone.",
    details: [
      "Anxiety skills, grief support, and postpartum circles",
      "Time-limited workshops and ongoing process groups",
      "Sliding-scale options when available",
    ],
    icon: "sparkles",
  },
  {
    id: "telehealth",
    title: "Telehealth & In-Person Care",
    summary:
      "Choose the format that helps you show up fully—secure video from home or a calm in-office setting.",
    details: [
      "HIPAA-compliant telehealth across Oregon",
      "Welcoming Portland suite with private rooms",
      "Hybrid care available with many clinicians",
    ],
    icon: "video",
  },
];
