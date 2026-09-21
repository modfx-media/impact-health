export interface StaffMember {
  slug: string;
  /** Full display name as shown on the live site (e.g. "Nick Southworth, DC"). */
  name: string;
  /** Short title/role shown as an eyebrow (e.g. "Chiropractor"). */
  role: string;
  /** One-line specialty blurb shown on the About page team grid. */
  blurb: string;
  /** Local headshot image path under /public. */
  image: string;
  /** Real live-site page <title>, preserved for this sub-page's metadata. */
  pageTitle: string;
  /** Real live-site meta description, preserved for this sub-page's metadata. */
  metaDescription: string;
  /** Full bio, word-for-word from the live site, split into paragraphs. */
  bio: string[];
}

// Mirrors the live site's "Our Team" staff roster and individual bio pages
// (https://impacthealthoh.com/staff/{slug}/), captured verbatim via the
// rendered DOM (the WP REST API's content.rendered field is unreliable for
// these page-builder/"flexible" template pages).
export const staffMembers: StaffMember[] = [
  {
    slug: "nick-southworth-dc",
    name: "Nick Southworth, DC",
    role: "Chiropractor",
    blurb: "Certified A. R. T. (Active Release Technique) practitioner",
    image: "/images/staff/nick-southworth-dc.jpg",
    pageTitle: "Nick Southworth, DC: Your Westerville Chiropractor",
    metaDescription:
      "Relieve pain and move better with Dr. Nick Southworth, your Westerville chiropractor. Experience expert chiropractic care and A.R.T. today. Book your visit!",
    bio: [
      "Meet Dr. Nick Southworth. Dr. Southworth is a chiropractic physician and certified A. R. T. (Active Release Technique) practitioner for Impact Health & Wellness.",
      "He has over 10 years of experience in chiropractic manipulation, prevention of disease, and healing without medication for professional and amateur athletes and the general public.",
      "Dr. Southworth specializes in preventing, diagnosing, and treating conditions associated with the neuromusculoskeletal system, while improving each patient’s functionality and quality of life. He seeks to reduce pain and discomfort through manipulation and adjustment of the spine. His primary goal is to empower people to live healthier, pain and drug-free lives through education of the chiropractic lifestyle.",
      "Dr. Southworth graduated from St Charles Preparatory High School in Columbus, Ohio, where he participated in football, wrestling, track, and golf. He then attended Miami University in Oxford, Ohio where he continued to participate in track. While at Miami he was an active member of Delta Upsilon Fraternity, as well as student government. He graduated from Miami in 2006 Pre-Med with a Bachelor of Arts in Biology/Zoology. He went on to attend Logan College of Chiropractic where he earned his Doctor of Chiropractic degree in 2011, as well as spent time working with the St. Louis Rams.",
      "Dr. Southworth takes pride as an active member of his local community. He has donated numerous hours, by conducting workshops to a variety of businesses, police and fire departments, social clubs, and surrounding communities. Dr. Southworth lives in Gahanna with his wife Meghan, three children Grace, Cole, and Lilly, and their dog Tucker. In his spare time, he enjoys sports, outdoor activities, and community functions.",
    ],
  },
  {
    slug: "justin-mahinda-md",
    name: "Justin Mahida, MD",
    role: "Wound Care Surgeon",
    blurb: "Advanced Wound Healing Techniques",
    image: "/images/staff/justin-mahida-md.jpg",
    pageTitle: "Dr. Justin Mahida: Wound Care at Impact Health & Wellness",
    metaDescription:
      "Trust Dr. Justin Mahida, MD, at Impact Health & Wellness in Westerville, OH, for advanced skin and wound care evaluation and treatment. Book your visit now!",
    bio: [
      "Meet Dr. Justin Mahida, MD. Dr. Mahida is a wound care surgeon for Impact Health & Wellness.",
      "He has five years of experience in skin and wound care evaluation and treatment for wounds of various etiologies.",
      "Dr. Mahida provides evaluation, diagnosis, and non-surgical and surgical treatment for patients with wounds of various etiologies, including advanced workups for patients with pressure-related wounds, vascular wounds, and chronic non-healing wounds. He is well versed in numerous advanced wound healing techniques including skin graft and skin substitute placement; negative pressure wound treatment, ultrasound-assisted debridement, and diathermy.",
      "Dr. Mahida graduated from Emory University in Atlanta, GA with a Bachelors of Science in Physics and Classical Studies before completing his medical doctor (MD) and masters of business administration (MBA) at The Ohio State University College of Medicine in 2011. Dr. Mahida joined the Ohio State University Department of Surgery at that time as a general surgery resident, and also completed a two year research fellowship at Nationwide Childrens Hospital Center for Surgical Outcomes Research from 2013 to 2015.",
      "In 2017, Dr. Mahida entered wound care practice with Vohra Wound Physicians, a multistate group practice headquartered in Miami FL. During this time, he examined up to 140 patients per week in 15 skilled nursing facilities across Ohio. He was also responsible for conducting teaching sessions for incoming physicians to the practice and directing peer review sessions for ongoing learning.",
    ],
  },
  {
    slug: "mary-hoobler-msn-aprn-fnp-c",
    name: "Mary Hoobler, FNP-C",
    role: "Nurse Practitioner",
    blurb: "Wound Care & Weight Loss Specialist",
    image: "/images/staff/mary-hoobler-fnp-c.jpg",
    pageTitle: "Mary Hoobler, FNP-C: Integrative Medicine in Westerville, OH",
    metaDescription:
      "Meet Mary Hoobler, FNP-C at Impact Health & Wellness in Westerville, OH. Experience expert integrative medicine and caring family practice. Book your visit!",
    bio: [
      "Meet Mary Hoobler. Mary is a board-certified Family Nurse Practitioner (FNP) for Impact Health & Wellness.",
      "She graduated from Northern Kentucky University with a Bachelor of Science in Nursing before completing her Master of Science in Nursing (Family Practice) at Chamberlain University.",
      "She has extensive experience in pediatrics and urgent and critical care but has found her passion in integrative and functional medicine for people of all ages. Mary enjoys working with her patients to develop a holistic, comprehensive approach to manage their pain.",
      "Mary’s passion for nursing started when she was 11 years old. Her brother was diagnosed with leukemia. She watched as her brother received outstanding care and formed lasting relationships with the nursing staff. It then became her goal to become a nurse so she could provide others with the same compassionate, exceptional care that her brother received.",
      "At Impact, Mary is an integral provider of wound care, BOTOX cosmetic, and IV infusion therapy services.",
    ],
  },
  {
    slug: "eve-ciacciarelli-pt",
    name: "Dr. Eve Ciacciarelli, DPT",
    role: "Physical Therapist",
    blurb: "Rehabiliation Specialist",
    image: "/images/staff/eve-ciacciarelli-dpt.jpg",
    pageTitle: "Dr. Eve Ciacciarelli | Physical Therapist in Westerville",
    metaDescription:
      "Meet Eve Ciacciarelli, DPT at Impact Health & Wellness. Get expert physical therapy in Westerville, OH focused on your recovery and mobility. Learn more today!",
    bio: [
      "Dr. Eve Ciacciarelli, our physical therapist, is highly skilled, compassionate, and committed to delivering exceptional care to patients of all ages and conditions.",
      "She specializes in designing personalized treatment plans that address the unique needs of each patient, focusing on techniques that promote healing, improve mobility, and enhance overall quality of life. Utilizing her background in outpatient and inpatient settings, Eve works to not only treat your musculoskeletal (i.e., injuries, pain, post surgical etc.) and neurological (i.e., stroke, TBI, etc.) conditions, but also to help you understand how those conditions developed in the first place.",
      "Eve graduated summa cum laude from The Richard Stockton University in Atlantic City, NJ. After becoming interested in the field of Physical Therapy while volunteering at a hippotherapy (physical therapy involving humans and horses) program. She believes in treating the entire individual and loves being a part of a multidisciplinary team. At Impact Health & Wellness, we are dedicated to helping you regain your strength, improve your mobility, and relieve your pain through personalized and evidence-based physical therapy services. Rehab therapy treatment interventions include various manual soft tissue techniques and joint mobilizations, corrective exercises and home programs, functional movement training, and patient education are all part of our integrated approach to help you feel and function at your best.",
    ],
  },
  {
    slug: "kimberly-stanley",
    name: "Kimberly Stanley",
    role: "Case Manager",
    blurb: "Case Manager",
    image: "/images/staff/kimberly-stanley.jpg",
    pageTitle: "Kimberly Stanley | Patient Care Expert in Westerville, OH",
    metaDescription:
      "Kimberly Stanley at Impact Health & Wellness is an expert case manager and billing specialist enhancing patient care with holistic medicine. Meet our team!",
    bio: [
      "Meet Kim. Kim is the case manager and billing specialist for Impact Health & Wellness.",
      "Kim has worked as a billing specialist and office manager for some of the most sought chiropractic and neurological offices in the Columbus area. In her experience, she has gained insight into a whole new world of holistic medical care to coincide with her surgical knowledge.",
      "Kim helps facilitate positive experiences and builds relationships that help create overall patient satisfaction and experiences.",
      "Kim has been married to her wonderful husband for 23 years, she has 3 adult children and a dog named Layla. In her spare time, she enjoys shopping, traveling, and just have a good old time hanging out with family and friends looking forward to the future.",
    ],
  },
  {
    slug: "morgan-steiskal-fnp-c",
    name: "Morgan Steiskal, APRN, FNP-C",
    role: "Nurse Practitioner",
    blurb: "Internal Medicine & Weight Loss Specialist",
    image: "/images/staff/morgan-steiskal-fnp-c.jpg",
    pageTitle: "Morgan Steiskal, FNP-C: Internal Medicine in Westerville, OH",
    metaDescription:
      "Meet Morgan Steiskal, FNP-C at Impact Health & Wellness in Westerville, OH. Experience expert care in internal medicine, weight loss, and hormone therapy. Book your visit!",
    bio: [
      "Meet Morgan Steiskal. Morgan is a board-certified family nurse practitioner for Impact Health & Wellness.",
      "Morgan graduated from Chamberlain College of Nursing in 2019 with a master's degree in nursing and focus on family medicine.",
      "Morgan has been an RN since 2008 and spent Dr. Steiskal's life studying medicine in various aspects. Morgan has extensive experience in hospital medicine, emergency medicine and family medicine.",
      "Morgan focuses on holistic approaches to disease management and implementing a plan of care the patients can work with. Morgan has spent 26 years in healthcare focusing on patients with different medical needs and backgrounds expanding from weight loss, diabetes control, reduction in cholesterol, neurological conditions, mental health and more.",
      "At Impact Morgan is an integral provider of internal medicine, weight loss, hormone replacement therapy, IV infusions and more.",
    ],
  },
  {
    slug: "chellee-hamilton",
    name: "Chellee Hamilton, MS",
    role: "Executive VP of Operations",
    blurb: "Executive VP of Operations",
    image: "/images/staff/chellee-hamilton.jpg",
    pageTitle: "Chellee Hamilton | Impact Health & Wellness in Westerville",
    metaDescription:
      "Chellee Hamilton at Impact Health & Wellness in Westerville has 40+ years of healthcare experience focused on patient-centered care. Learn more about her story.",
    bio: [
      "Chellee has more than 40 years of healthcare experience.",
      "Her clinical background was in Imaging where she spent 10 years as the Director of Radiology. Chellee successfully managed the development and opening of a $52M free-standing ED, ambulatory campus, and medical office building with improved ED growth by 16%. Prior to joining Impact Health & Wellness she served as the VP Operations. Her focus has always been on keeping the patient at the center of everything she does.",
    ],
  },
];
