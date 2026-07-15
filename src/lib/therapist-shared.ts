export type TherapistFormat = "In-person" | "Virtual";

export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  specializations: string[];
  formats: TherapistFormat[];
  statement: string;
  bio: string[];
  sortOrder: number;
  isActive: boolean;
};

export type BlogAuthor = {
  id: string;
  name: string;
  credentials: string;
  image: string;
  role: string;
};
