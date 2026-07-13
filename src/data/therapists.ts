export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  specializations: string[];
  formats: ("In-person" | "Virtual")[];
  statement: string;
};

export const therapists: Therapist[] = [
  {
    id: "maya-chen",
    name: "Dr. Maya Chen",
    credentials: "PsyD",
    role: "Clinical Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    specializations: ["Anxiety", "Trauma", "Life Transitions", "CBT"],
    formats: ["In-person", "Virtual"],
    statement:
      "I believe healing happens when people feel truly seen. My work blends evidence-based care with deep respect for each client's story and cultural context.",
  },
  {
    id: "james-okafor",
    name: "James Okafor",
    credentials: "LCSW",
    role: "Therapist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    specializations: ["Depression", "Men's Mental Health", "Grief", "ACT"],
    formats: ["In-person", "Virtual"],
    statement:
      "Therapy should feel like a place where you can exhale. I help clients rebuild meaning after loss, burnout, and the quiet weight of everyday pressure.",
  },
  {
    id: "sofia-reyes",
    name: "Sofia Reyes",
    credentials: "LMFT",
    role: "Therapist",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    specializations: ["Couples", "Family Therapy", "Identity", "EFT"],
    formats: ["In-person", "Virtual"],
    statement:
      "Relationships are where we learn who we are. I create a warm, structured space for couples and families to reconnect with honesty and care.",
  },
  {
    id: "elena-brooks",
    name: "Elena Brooks",
    credentials: "LPC",
    role: "Therapist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    specializations: ["Trauma", "PTSD", "Anxiety", "EMDR"],
    formats: ["Virtual"],
    statement:
      "You don't have to carry the past alone. I specialize in trauma recovery with a paced, collaborative approach that prioritizes safety and agency.",
  },
  {
    id: "david-park",
    name: "David Park",
    credentials: "LCSW",
    role: "Therapist",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    specializations: ["ADHD", "Life Transitions", "Career Stress", "CBT"],
    formats: ["In-person"],
    statement:
      "Growth rarely follows a straight line. I help clients clarify what matters, build practical tools, and move forward with more self-compassion.",
  },
  {
    id: "amira-hassan",
    name: "Amira Hassan",
    credentials: "LMFT",
    role: "Therapist",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
    specializations: ["Perinatal Mental Health", "Anxiety", "Group Therapy", "Mindfulness"],
    formats: ["In-person", "Virtual"],
    statement:
      "Becoming a parent—or becoming yourself again afterward—deserves dedicated support. I offer gentle, culturally responsive care for this tender season.",
  },
];

export const allSpecialties = Array.from(
  new Set(therapists.flatMap((t) => t.specializations)),
).sort();
