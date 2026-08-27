export type IconName = "book" | "route" | "file" | "home";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Study in Japan", href: "/study-in-japan" },
  { label: "Stories + Contact", href: "/success-stories" },
];

export const footerLinks = navItems;

export const whatsappPhone = "919557914389";
export const whatsappLink = `https://wa.me/${whatsappPhone}`;
export const founderPhotoUrl = "https://customer-assets-0z36b82j.emergentagent.net/job_rsp-japan-learn/artifacts/ck26a83g_Minimalist%20professional%20corporate%20Marketing%20Plan%20charts%20and%20graphs%20presentation.png";

export const courseLevels = [
  { level: "N5", duration: "4–5 months", hours: "6 hrs / week", detail: "Build a confident foundation in everyday Japanese, hiragana, katakana, and simple conversation." },
  { level: "N4", duration: "5–6 months", hours: "6 hrs / week", detail: "Navigate daily life, understand familiar topics, and speak with more natural rhythm." },
  { level: "N3", duration: "7–8 months", hours: "8 hrs / week", detail: "The bridge to Japan: read practical Japanese, follow conversations, and prepare for school." },
  { level: "N2", duration: "8–10 months", hours: "8 hrs / week", detail: "Work with business vocabulary, complex texts, interviews, and the language of opportunity." },
  { level: "N1", duration: "10–12 months", hours: "10 hrs / week", detail: "Reach advanced fluency for professional settings, higher study, and a life lived in Japanese." },
];

export const timeline = [
  { year: "2020", title: "RSP is founded", detail: "A classroom in Meerut becomes the starting point for a Japan-bound dream." },
  { year: "2021", title: "First student batch", detail: "The first learners begin their Japanese language journey with personal guidance." },
  { year: "2023", title: "First N1 achievements", detail: "Students move from grammar drills to advanced confidence and real outcomes." },
  { year: "2024", title: "50+ students milestone", detail: "More than fifty students take their next step toward study and work in Japan." },
  { year: "Today", title: "The journey continues", detail: "From Kyoto, Rohit keeps walking beside every new student and family." },
];

export const steps = [
  { number: "01", title: "Counselling", detail: "We understand your goals, current level, budget, and the kind of life you want in Japan." },
  { number: "02", title: "Language training", detail: "Build from the first kana to N3 with a structured plan, practice, and steady accountability." },
  { number: "03", title: "Document preparation", detail: "Get clear guidance for academic records, financial papers, translations, and the application file." },
  { number: "04", title: "Application", detail: "Your documents move to the partner school with a timeline you can understand." },
  { number: "05", title: "COE", detail: "We stay close through the Certificate of Eligibility stage and answer every question." },
  { number: "06", title: "Visa", detail: "Prepare for your visa appointment with calm, practical support." },
  { number: "07", title: "Departure", detail: "Know what to pack, what to expect, and how to arrive prepared." },
  { number: "08", title: "Arrival support", detail: "A new country feels lighter when someone who lives there is still in your corner." },
];

export const testimonials = [
  { name: "Aarav Sharma", level: "JLPT N2", place: "Yokohama", quote: "Rohit sir made Japan feel possible long before I boarded the flight. The plan was always clear." },
  { name: "Priya Singh", level: "JLPT N3", place: "Kanagawa", quote: "I came for Japanese classes. I stayed for the confidence, discipline, and belief that I could build a life here." },
  { name: "Kunal Verma", level: "JLPT N1", place: "Tokyo", quote: "The support did not stop at admission. It continued through every difficult and exciting first." },
];

export const placeholderLabels = {
  founder: "[PLACEHOLDER: Rohit Shiv Prasad portrait]",
  certificate: "[PLACEHOLDER: Rohit qualification certificate]",
  kyoto: "[PLACEHOLDER: Kyoto street / founder life]",
  yokohama: "[PLACEHOLDER: Yokohama school exterior]",
  classroom: "[PLACEHOLDER: RSP classroom batch]",
  studentLife: "[PLACEHOLDER: Student life in Japan]",
};