export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorCredentials: string;
  tags: string[];
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "finding-hope-when-anxiety-feels-heavy",
    title: "Finding Hope When Anxiety Feels Heavy",
    excerpt:
      "Anxiety can make the future feel shut down. Here’s a compassionate, practical look at rebuilding hope - one small, strength-based step at a time.",
    date: "2026-07-15",
    author: "Christopher Diddle",
    authorCredentials: "LICSW",
    tags: ["Anxiety", "Hope", "Mental Health"],
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1400&q=80",
    content: [
      "As a therapist, I know that hope is obtainable despite feelings of depression or anxiety. Imagining life with hope and happiness can be challenging, but it is possible to achieve.",
      "Many of the people I work with describe anxiety as more than worry. It can feel like a full-body experience - tightness in the chest, restless thoughts, and a sense that something is wrong even when life looks “fine” from the outside. In those moments, hope can feel out of reach. That does not mean hope is gone. It means we may need a warmer, more realistic path back to it.",
      "At New Aviv, I utilize a strength-based approach with multiple behavioral health techniques and therapies to personalize care for couples or individuals. Tools such as Cognitive Behavioral Therapy (CBT) and Dialectical Behavioral Therapy (DBT) can help people notice patterns, challenge unhelpful thoughts, and build skills for emotional regulation - without dismissing how hard things feel.",
      "I also believe creating a warm, accepting, and safe environment is important to the therapeutic process. Healing rarely happens through pressure. It happens through connection: feeling understood, identifying goals that matter to you, and developing positive growth at a pace that respects your nervous system.",
      "If anxiety has been taking up more space in your life lately, consider these gentle starting points:",
      "Name what is happening without judgment. Saying “I am feeling anxious right now” can create just enough distance to respond with care instead of self-criticism.",
      "Choose one small, workable goal. Hope often returns through action that feels doable - a short walk, a text to someone safe, or a five-minute breathing practice - not through forcing yourself to feel better overnight.",
      "Ask for support. Therapy is a place to develop a plan collaboratively so we address challenges the way you want to address them. You do not have to build a hopeful future alone.",
      "If you are ready for a brief consultation, I would welcome the chance to talk about your goals and whether we can work together toward greater well-being.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
