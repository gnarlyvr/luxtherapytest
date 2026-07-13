export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  specializations: string[];
  formats: ("In-person" | "Virtual")[];
  /** Short preview shown by default */
  statement: string;
  /** Full biography paragraphs from newaviv.com */
  bio: string[];
};

const cdn =
  "https://images.squarespace-cdn.com/content/v1/62a90d994f9cd65136626afd";

export const therapists: Therapist[] = [
  {
    id: "christopher-diddle",
    name: "Christopher Diddle",
    credentials: "LICSW",
    role: "Therapist",
    image: `${cdn}/06722733-bd12-4697-aa49-9f522882f9e3/Christopher+picture.jpg`,
    specializations: ["Anxiety", "Depression", "Couples", "CBT", "DBT"],
    formats: ["In-person", "Virtual"],
    statement:
      "As a therapist, I know that hope is obtainable despite feelings of depression or anxiety. I utilize a strength-based approach to personalize care for couples, individuals, and families.",
    bio: [
      "As a therapist, I know that hope is obtainable despite feelings of depression or anxiety. Imagining life with hope and happiness can be challenging, but it is possible to achieve. I utilize a strength-based approach with multiple behavioral health techniques and therapies to personalize care of couples or individuals. I help identify and achieve goals while making a connection and developing positive growth and well-being. I enjoy working with adults of all ages, couples, and families.",
      "I believe creating a warm, accepting, and safe environment is important to the therapeutic process. My strength-based approach and use of person-centered therapy (CCT) helps me achieve this ideal therapeutic environment. I use Cognitive Behavioral Therapy (CBT) and Dialectical Behavioral Therapy (DBT) to further address challenges.",
      "I develop therapy plans collaboratively with my patients to ensure we’re addressing challenges the way you want to address them. I’ve learned that I’m exceptional at showing the empathy I have for others and utilizing this empathy to develop a therapeutic plan.",
      "Contact me for a brief consultation so we can discuss if we can address your goals and expectations.",
    ],
  },
  {
    id: "katherine-germak",
    name: "Katherine Germak",
    credentials: "LICSW",
    role: "Therapist",
    image: `${cdn}/7783b0ef-1c44-494f-902f-5f92a7de9321/Katherine+profile+pic.jpg`,
    specializations: [
      "Anxiety",
      "Depression",
      "Chronic Illness",
      "Eating Disorders",
      "Addiction",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "My goal is to cultivate a warm and compassionate environment to help my patients in their journey to healing.",
    bio: [
      "My goal is to cultivate a warm and compassionate environment to help my patients in their journey to healing. I have 6 years of experience as a medical social worker at an inpatient hospital. As a clinical social worker, I work with adolescents and adults who are experiencing a variety of challenges such as chronic illness, anxiety, depression, eating disorders, bereavement, and addiction.",
      "I bring a sense of hope and peace to all of my patients, to help them realize that recovery is possible. I look forward to meeting you and working together.",
    ],
  },
  {
    id: "lenore-shepard",
    name: "Lenore Shepard",
    credentials: "LICSW",
    role: "Therapist & Health Coach",
    image: `${cdn}/2377658f-4ff3-4162-8915-4e15ffb8fff5/Lenore_Shepard_picture.jpg`,
    specializations: [
      "Trauma",
      "Anxiety",
      "Life Transitions",
      "Caregivers",
      "Mindfulness",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Lenore brings a compassionate, collaborative, and holistic approach for young adults navigating trauma, anxiety, chronic disease, and life transitions.",
    bio: [
      "The most important relationship we will ever have is the one with ourselves, nurtured and cultivated over a lifetime. Finding the right therapist with which to partner in this journey is an essential foundation for building awareness, and ultimately growth and healing. Lenore brings a compassionate, collaborative and holistic approach to working with young adults who have a history of physical and emotional trauma, anxiety, depression, living with a chronic disease, relationship challenges, and personal and professional life transitions and who are looking for ways to deepen their self-care routine. Lenore also specializes in working with older adults who are facing physical challenges and limitations, as well as caregivers.",
      "After earning her Master’s Degree in Social Work, Lenore went on to study holistic nutrition and lifestyle medicine at IIN and also studied functional medicine to further understand the dynamic of mind-body connection as well as how we heal. As both a Licensed Independent Clinical Social Worker and Health Coach, Lenore believes that all of the ways we nourish ourselves—through our thoughts, connection with others, nutrition, movement, being in nature, mindfulness, restful sleep, as well as the right kind of therapeutic support—helps create a dynamic of healing and wholeness for the body and soul.",
      "Using a combination of therapeutic approaches like Solution-focused therapy, Mindfulness-Based Stress Reduction, CBT, Strength-based and Interpersonal therapy, Lenore empowers individuals to get unstuck, navigate through trauma and transitions, and cultivate a deeper sense of self-compassion, growth and healing.",
    ],
  },
  {
    id: "ashlyn-brooks",
    name: "Ashlyn Brooks",
    credentials: "LMHC",
    role: "Therapist",
    image: `${cdn}/a3b984c0-0578-43f6-95a2-d8deb4c409f0/pic2.jpg`,
    specializations: [
      "Self-Esteem",
      "Anxiety",
      "Depression",
      "Substance Use",
      "Expressive Arts",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Using an eclectic individualized approach, Ashlyn leverages mind-body practices and self-esteem building as powerful tools toward self-empowerment.",
    bio: [
      "Using an eclectic individualized approach, Ashlyn leverages mind-body practices and self-esteem building as powerful tools towards self-empowerment.",
      "Ashlyn is a Licensed Mental Health Counselor (LMHC) in the state of Massachusetts. They work with adults and believe that taking an eclectic approach can help foster a greater sense of awareness and allow you to feel more connected in your mind, body, and personal relationships. Ashlyn has experience working with individuals with depression, anxiety, low self-esteem, relationship and communication challenges, life transitions, and substance use. They bring transparency, authenticity, creative problem solving, and humor to the therapeutic relationship.",
      "Ashlyn received their Masters of Science degree in Mental Health Counseling from The University of Massachusetts, Boston. They utilize Person-Centered, Strengths-Based, Expressive Arts Therapy, Dialectical Behavioral Therapy, and Cognitive Behavioral Therapy approaches to help support individuals in developing strategies to think holistically about their perspectives and behaviors, develop healthy personal relationships, and move towards their individualized treatment goals.",
      "Do you feel that you are hard on yourself or have distressing thoughts take up your time and mental energy? Ashlyn is confident that they will be able to support you on your journey to develop new perspectives, learn new insights, and utilize new techniques to promote self-awareness and self-compassion. If you are ready to start this process, schedule an appointment with them today.",
    ],
  },
  {
    id: "maryrose-kline",
    name: "MaryRose Kline",
    credentials: "LICSW",
    role: "Therapist",
    image: `${cdn}/7283e63b-1f19-46a1-bb9a-a4916142462b/Maryrose+Kline+profile+photo.jpeg`,
    specializations: [
      "Anxiety",
      "Depression",
      "Trauma",
      "Women's Issues",
      "CBT",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "MaryRose will work with you to recover the parts of your life that bring you peace, connection, meaning and purpose.",
    bio: [
      "MaryRose is a Licensed Independent Clinical Social Worker in the state of Massachusetts. She earned her Masters of Social Work from Boston University. MaryRose has experience working with those who are dealing with anxiety, depression, women’s issues, substance use, trauma, life transition, and relationship issues. She is currently a school social worker but also has experience working in hospitals, community settings, and jails. MaryRose uses a variety of therapeutic approaches such as Solution-Focused therapy, CBT, and Strengths-Based approaches. MaryRose will work with you to recover the parts of your life that bring you peace, connection, meaning and purpose.",
    ],
  },
  {
    id: "elizabeth-miraglia",
    name: "Elizabeth Miraglia",
    credentials: "LCSW",
    role: "Therapist",
    image: `${cdn}/909c0f18-0f55-48b2-8a62-b4a0c2743934/Elizabeth+Miraglia.jpg`,
    specializations: ["Trauma", "Substance Use", "Couples", "Families", "Adolescents"],
    formats: ["In-person", "Virtual"],
    statement:
      "I believe our past experiences inform our present—but they do not determine our future. This idea serves as the foundation of our work together.",
    bio: [
      "As a therapist, I believe our past experiences inform our present: they shape who we are, how we act, what we value, and how we relate to others. However, I also believe they do not determine our future. This idea serves as the foundation of our work together. My approach involves helping you identify your values, utilize the strengths you already possess, and develop your vision for a life worth living. I assist in examining how our interpersonal relationships can establish and reinforce maladaptive coping, and work with you to replace what no longer serves you with a fresh perspective and new skills.",
      "I have experience working with individuals with significant trauma history, major mental illness, and issues related to substance use. I employ an eclectic mix of modalities including psychodynamic therapy, humanistic therapy, and behavioral therapies. I work relationally, allowing space for honesty, humor and validation.",
      "I am open to learning and growing from our relationship, and strive to continuously adapt to your specific needs. I am currently working with adolescents, adults, couples, and families.",
    ],
  },
  {
    id: "ryan-israel",
    name: "Ryan Israel",
    credentials: "LCSW",
    role: "Therapist",
    image: `${cdn}/89cace1c-e508-46f5-a07a-e9685f828291/Ryan+Israel.jpeg`,
    specializations: [
      "Trauma",
      "Grief",
      "Couples",
      "Families",
      "Multicultural Care",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "I believe in creating an environment of trust and safety with my clients. Together we can explore individual experiences in order to help identify and resolve issues and maladaptive behaviors.",
    bio: [
      "Hi, I am Ryan A. Israel.",
      "I believe in creating an environment of trust and safety with my clients. Together we can explore individual experiences in order to help identify and resolve issues and maladaptive behaviors.",
      "I specialize in working with adults, couples, families, and children suffering from trauma, depression, anxiety, abuse, caregiver stress, grief and loss, and relationship problems.",
      "I am a Licensed Clinical Social Worker. I graduated from the University of Michigan School of Social Work.",
      "I come from a legal background, practicing as a Florida licensed attorney since 2015 and as an immigration lawyer. I was admitted to the Michigan bar as well as the Southern District Court of Florida and the Eastern District Court of Michigan. I graduated Magna Cum Laude from Michigan State University College of Law with a Juris Doctorate Degree. I received a Master of Jurisprudence Legal Doctrine and Analysis Degree. I graduated with a Romance Languages and Literature degree from the University of Michigan. I speak fluent Spanish, Italian, French, and Portuguese.",
      "I have experience working with clients from around the world and coming from many different backgrounds and cultures.",
      "In my spare time, I enjoy hiking, camping, traveling, and being in nature.",
    ],
  },
  {
    id: "gertrude-carl",
    name: "Trudy Carl",
    credentials: "LCSW",
    role: "Therapist",
    image: `${cdn}/9b506abf-0644-4a23-afb2-e908382686bd/Gertrude+Carl.jpg`,
    specializations: [
      "Anxiety",
      "Grief",
      "Trauma",
      "Couples",
      "Families",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Trudy approaches clients as a human first and therapist second, maintaining an empathetic, warm, and non-judgmental environment.",
    bio: [
      "Trudy Carl, LCSW (she/her/hers) is a Licensed Clinical Social Worker specializing in individual, family, and couple therapy. With a compassionate and empathetic approach, Trudy works with adolescents, adults, couples, and families to uncover their innate wholeness, often obscured by challenges such as shame, anger, life transitions, anxiety, grief, trauma, or hopelessness.",
      "In sessions, Trudy approaches clients as a human first and therapist second, maintaining an empathetic, warm, and non-judgmental environment where clients can freely explore their stories and work towards healing and growth. She looks forward to meeting new clients and embarking on a journey of self-discovery and transformation together.",
    ],
  },
  {
    id: "kelsey-hendon",
    name: "Kelsey Hendon",
    credentials: "LCSW",
    role: "Therapist",
    image: `${cdn}/0d70d391-5a98-47b1-90dc-b3dda7b35c4b/Kelsey.jpg`,
    specializations: ["Depression", "Anxiety", "Addiction", "CBT", "DBT", "ACT"],
    formats: ["In-person", "Virtual"],
    statement:
      "Kelsey is trauma-informed and focuses on rebuilding relationships with thoughts and emotions, emphasizing that no feelings are inherently bad.",
    bio: [
      "Kelsey Hendon, LCSW, is a compassionate and dedicated therapist with a passion for guiding individuals on their journey towards healing and personal growth. Originally from Reno, Nevada, Kelsey holds a Bachelor's degree in Social Work from the University of Nevada, Reno, and a Master's degree in Social Work from Fordham University in New York. With seven years of experience in Behavioral Health, including a previous role as a Director at Reno Behavioral Healthcare Hospital, Kelsey specializes in addressing a range of mental health challenges such as depression, anxiety, addiction, suicidality, mood disorders, psychosis, and personality disorders.",
      "Kelsey's therapeutic approach focuses on rebuilding relationships with thoughts and emotions, emphasizing that no feelings are inherently bad. She is trauma-informed and provides a safe space for clients to explore their emotions without judgment. Kelsey supports meditative practices and encourages reflection as tools for self-awareness and healing. She believes in embracing what can be controlled while releasing what cannot, guiding individuals towards self-discovery and growth. Utilizing evidence-based modalities such as CBT, DBT, and ACT, Kelsey collaborates with clients to identify their goals and work towards achieving them, delving deep into the “whys” that shape their paths and lead them to their present selves.",
      "“You only are free when you realize you belong no place — you belong every place — no place at all. The price is high. The reward is great.” — Maya Angelou",
      "Kelsey looks forward to partnering with you on your therapeutic journey, providing compassionate support and guidance as you navigate challenges and foster positive change in your life.",
    ],
  },
  {
    id: "charlie-martin",
    name: "Charlie Martin",
    credentials: "LCSW",
    role: "Therapist",
    image: `${cdn}/f2a02975-9b62-49f7-a1b9-8ab26e7055f9/Charlie.jpg`,
    specializations: [
      "Young Adults",
      "LGBTQIA+",
      "Families",
      "Crisis Intervention",
      "Trauma",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Charlie (they/them) joins folks on their journey to mental health wellness and recovery, with a focus on LGBTQIA+ young adults.",
    bio: [
      "My name is Charlie, my pronouns are they/them/theirs, and I love joining folks on their journey to mental health wellness and recovery. I am a social worker and a Boston native who has been in the field of mental/behavioral health for several years. I have specialized in working with youth and families, young adult/transition to adulthood populations, and crisis intervention/high acuity across all ages. I have a heavy emphasis on working with transitional age/young adults in the LGBTQIA community—I identify as both queer and nonbinary and joined the therapy field to help others navigate the systems, values, and beliefs that can directly affect and shape our identities. Learning to find what makes us happy, healthy, and whole can be difficult. I aim to help folks learn, process, and grow using a compassionate, understanding, and trauma-informed lens.",
    ],
  },
  {
    id: "anabela-dos-ramos",
    name: "Anabela Dos Ramos",
    credentials: "LMHC",
    role: "Therapist",
    image: `${cdn}/49d71f2e-76a5-42d0-a1be-f782c8197f3e/Anabela.jpg`,
    specializations: [
      "Adults",
      "Grief",
      "Trauma",
      "Anxiety",
      "Mindfulness",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Anabela believes clients should be supported through validation and given space to freely express themselves without judgment.",
    bio: [
      "Anabela is a Licensed Mental Health Counselor who provides individual counseling to adults (18 or older) and the geriatric population. My belief is clients should be supported through validation, be given the space to freely express themselves without judgment, and assisted with their challenges through a holistic lens. I encourage clients to navigate their own therapy sessions so they are in control and able to embrace the safe space provided to them. I am passionate about providing clients with a space to grow, heal, and create the next-level version of themselves. It is imperative that clients feel valued, heard, and supported in order to identify their presenting concerns in therapy. Some of my experience includes working with incarcerated individuals, clients experiencing depression, anxiety, trauma/PTSD, and grief. My clinical approaches include Solution-Focused therapy, Cognitive Behavioral Therapy, Mindfulness, Motivational Interviewing, and Person-Centered Therapy.",
    ],
  },
  {
    id: "danielle-moran",
    name: "Danielle Moran",
    credentials: "MSW",
    role: "Therapist",
    image: `${cdn}/b03e6513-c406-4956-8a85-718a884756b0/Danielle.jpg`,
    specializations: [
      "Trauma",
      "PTSD",
      "Adoption",
      "LGBTQ Affirming",
      "Couples",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "I strive to create a comfortable and accepting therapeutic relationship and bring a sense of hope to all of my clients.",
    bio: [
      "I strive to create a comfortable and accepting therapeutic relationship. I focus on you, your needs and goals, with the assistance of evidence-based therapy including client-centered therapy, cognitive behavioral therapy, solution-focused therapy, motivational interviewing, mindfulness, LGBTQ affirming therapy and more. I bring a sense of hope to all of my clients.",
      "I work with adolescents and adults who are experiencing a variety of life’s challenges such as anxiety, depression, PTSD, eating disorders, substance abuse, adoption and relationship challenges including couples counseling. I am a Certified Clinical Trauma Professional and certified as an Adoption Competent Therapist. I look forward to working with you to achieve your goals.",
    ],
  },
  {
    id: "hailey-burkholder",
    name: "Hailey Burkholder",
    credentials: "MSW",
    role: "Therapist",
    image: `${cdn}/5227532c-234b-4110-9ef6-8fe19ec1536f/Hailey.jpeg`,
    specializations: [
      "Self-Doubt",
      "Anxiety",
      "Cultural Affirming Care",
      "Personal Growth",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Hailey works collaboratively with individuals to break patterns of self-doubt and overthinking in a culturally affirming space.",
    bio: [
      "I am Hailey Burkholder (she/her), a dedicated Social Worker in Ohio & Massachusetts, working collaboratively with individuals to break the debilitating patterns of self-doubt and overthinking. I aim to provide a supportive space to those on a journey of reflection and growth. As a Social Worker, I recognize the importance of cultural sensitivity and the impact it has on our experiences and perceptions. My approach integrates culturally-informed practices with evidence-based modalities. I am here to offer guidance and support in the face of any adversities. I am deeply committed to promoting mental health awareness and reducing the stigma surrounding mental illness within different communities. By providing a safe and culturally-affirming space, I strive to create opportunities for healing, growth, and self-discovery.",
      "With a Master of Social Work from the Ohio State University, I embarked on a deeply rewarding journey working with individuals in a therapeutic setting. Drawing upon my education and passion for helping others, I’ve dedicated myself to making a positive impact on the lives of those facing various challenges. Through empathy, patience, and evidence-based interventions, I strive to create a nurturing environment where every individual feels heard, understood, and empowered to overcome challenges. If you’re seeking support, I invite you to reach out to take the first step towards a healthier, more fulfilling life. Let’s work together to cultivate positive change and embrace your authentic self!",
    ],
  },
  {
    id: "jarrod",
    name: "Jarrod",
    credentials: "Mental Health Counselor",
    role: "Therapist",
    image: `${cdn}/cfcac2cd-8125-4133-aa64-dff77076b78a/Jarrod.jpeg`,
    specializations: [
      "Depression",
      "Anxiety",
      "PTSD",
      "Suicide Prevention",
      "Group Therapy",
    ],
    formats: ["In-person", "Virtual"],
    statement:
      "Jarrod believes no one should have to struggle alone, and is committed to helping individuals find hope even in their darkest moments.",
    bio: [
      "Hi there, I am Jarrod!",
      "In my role as a mental health counselor, my genuine love for people and belief is that no one should have to struggle alone. I have experience working with many different populations in individual and group therapy, including adults suffering from depression, anxiety, personality and thought disorders, and PTSD. I know how heavy life can feel sometimes, and I'm passionate about being someone who truly listens without judgment, which makes all the difference.",
      "I approach counseling with empathy, patience, and compassion, always striving to create and foster a supportive, safe space where people feel comfortable enough to be vulnerable, honest, and fully themselves. I use a variety of therapeutic approaches because I believe healing looks different for everyone, and each person deserves care that’s specific to them to cultivate growth and resilience.",
      "Suicide awareness and prevention hold a very special place in my heart, and I am committed to helping individuals find hope even in their darkest moments. More than anything, I want the people I work with to know they are not alone, that their life has value, and that healing, growth, and happiness are possible—even when it may not feel that way at first.",
    ],
  },
];

export const allSpecialties = Array.from(
  new Set(therapists.flatMap((t) => t.specializations)),
).sort();
