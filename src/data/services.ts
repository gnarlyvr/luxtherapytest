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
      "You don’t have to suffer alone in silence. Finding time to develop yourself will often help all aspects of your life. Hope and happiness are achievable - together, we will develop goals and skills to feel the way you want to feel.",
    details: [
      "Anxiety or depression",
      "Relationship issues and feeling overwhelmed",
      "Intense stress, grief and loss",
      "Work issues, family or life transitions",
      "Separation, divorce, or feeling generally stuck",
    ],
    icon: "user",
  },
  {
    id: "couples",
    title: "Couples Therapy and Marriage Counseling",
    summary:
      "Couples can feel stuck, unheard, and even unloved. Connecting or reconnecting with your loved one matters. We work together to identify strengths in the relationship and solutions to challenges.",
    details: [
      "Validation and a path toward happier connection",
      "Support for communication that often gets misunderstood",
      "Help asking for what you need and rebuilding trust",
      "Guidance when relationships take unwanted turns",
    ],
    icon: "heart",
  },
  {
    id: "family",
    title: "Family Counseling",
    summary:
      "It’s easy to lose yourself when life’s demands pile up. If you want healthier connection and more time on enjoyable interactions, we can help you start a path toward fulfillment.",
    details: [
      "Guidance when arguments escalate without resolving the root issue",
      "Stronger connection with the people around you",
      "Support for feeling validated within the family system",
      "Brief consults to begin happier living together",
    ],
    icon: "users",
  },
  {
    id: "teen",
    title: "Teen Counseling",
    summary:
      "Teenage years are among the most challenging as teens transition toward adulthood. We help develop the skills and confidence to grow and make positive life choices.",
    details: [
      "Support through uncertainty, change, and new emotions",
      "Better connection and understanding between parents and teens",
      "Help navigating stress, hormones, and life changes",
      "Skills for healthy, happy development",
    ],
    icon: "sparkles",
  },
  {
    id: "group",
    title: "Group Counseling",
    summary:
      "Groups offer a unique opportunity to learn from peers and practice therapeutic life skills together. Expressing yourself and hearing others’ understanding is validating.",
    details: [
      "DBT Skills Group for Young Adults - learning and practicing DBT skills in depth",
      "Man to Man for Adult Men - discussion about the demands on men and how we handle them",
      "Peer support alongside clinical facilitation",
      "Skills you can take into everyday life",
    ],
    icon: "video",
  },
];
