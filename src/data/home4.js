const files = import.meta.glob("../assets/images/*.{webp,png,svg}", { eager: true, import: "default" });
export const img = (name) => files[`../assets/images/${name}`];

export const nav = [
  { label: "Home", to: "/home-4" },
  { label: "Pages", to: "#", menu: true },
  { label: "Services", to: "#", menu: true },
  { label: "Portfolio", to: "#", menu: true },
  { label: "Contact", to: "/contact" },
];

export const clientAvatars = [
  "client-1.webp",
  "client-2.webp",
  "client-3.webp",
];

export const chooseBest = [
  {
    icon: "Lightbulb",
    title: "Innovative Solutions",
    text: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.",
  },
  {
    icon: "Trophy",
    title: "Award-Winning Expertise",
    text: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.",
  },
  {
    icon: "Headset",
    title: "Dedicated Support",
    text: "Our team is always available to address your concerns, providing quick and effective solution to keep your business.",
  },
];

export const aboutStats = [
  {
    icon: "BarChart3",
    value: "20M",
    text: "Reach Worldwide empower dreams everywhere.",
  },
  {
    icon: "BadgeCheck",
    value: "8.5X",
    text: "Faster Growth starts smart solutions today.",
  },
];

export const services = [
  { title: "Business Strategies Development", image: "service-1.webp" },
  { title: "Customer Experience Solutions", image: "service-2.webp" },
  { title: "Sustainability and ESG Consulting", image: "service-3.webp" },
];

export const projects = [
  { title: "Event Management Platform", image: "project-1.webp" },
  { title: "Rebranding Strategy for a Growing", image: "project-2.webp" },
  { title: "Interactive Learning Platform", image: "project-3.webp" },
  { title: "Environmental Impact Dashboard", image: "project-4.webp" },
];

const quote =
  "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations our goals faster than imagined. We truly feel like a valued partner.";
export const testimonials = [
  { name: "Guy Hawkins", image: "client-1.webp" },
  { name: "Ralph Edwards", image: "client-2.webp" },
  { name: "Devon Lane", image: "client-3.webp" },
  { name: "Guy Hawkins", image: "client-1.webp" },
].map((t) => ({ ...t, role: "Co. Founder", text: quote }));

export const team = [
  { name: "Eade Marren", role: "Chief Executive", image: "team-1.webp" },
  { name: "Savannah Ngueen", role: "Operations Head", image: "team-2.webp" },
  { name: "Kristin Watson", role: "Marketing Lead", image: "team-3.webp" },
  {
    name: "Darlene Robertson",
    role: "Business Director",
    image: "team-4.webp",
  },
];

export const posts = [
  {
    title: "Harnessing Digital Transform a Roadmap Businesses.",
    image: "blog-6.webp",
  },
  {
    title: "Harnessing Digital Transform a Roadmap Businesses.",
    image: "blog-7.webp",
  },
  {
    title: "Mastering Change Management Lessons for Businesses.",
    image: "blog-8.webp",
  },
];

const answer =
  "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project.";
export const faqs = [
  "What services does Bexon offer to clients?",
  "How do I get started with Corporate Business?",
  "How do you ensure the success of a project?",
  "How long will it take to complete my project?",
  "Can I track the progress of my project?",
].map((q) => ({ q, a: answer }));

export const footerLinks = [
  {
    title: "Services",
    items: [
      "Customer Experience",
      "Training Programs",
      "Business Strategy",
      "Training Program",
      "ESG Consulting",
      "Development Hub",
    ],
  },
  {
    title: "Resources",
    items: [
      "Contact us",
      "Team Member",
      "Recognitions",
      { label: "Careers", isNew: true },
      "News",
      "Feedback",
    ],
  },
];

export const marqueeWords = [
  { word: "Growth", image: "marquee-1.webp" },
  { word: "Leadership", image: "marquee-2.webp" },
  { word: "Enterprise", image: "marquee-1.webp" },
];
