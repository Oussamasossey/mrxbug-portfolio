export const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Git", "GitHub", "Motion", "GSAP"];
export const journey = ["Learning", "Building", "Experimenting", "Shipping", "Improving"];
export const principles = ["Visual hierarchy", "Interaction design", "Responsive design", "Accessibility", "Performance", "User flows", "Conversion", "Information architecture"];
export const sahara = {
  title: "SAHARATRAVEL",
  client: "SaharioCamelTours",
  description: "A complete tourism and booking platform built for SaharioCamelTours, a Marrakech-based private tour operator.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
  liveUrl: "https://www.sahariocameltours.com",
  overview:
    "SaharaTravel is a complete tourism and booking platform built for SaharioCamelTours, a Marrakech-based private tour operator specializing in Sahara Desert expeditions, Atlas Mountain trips, and cultural excursions across Morocco, including Ait Ben Haddou and other destinations. The platform is live in production at sahariocameltours.com. SaharioCamelTours brings 15+ years of local expertise and has served 500+ travelers.",
  problem:
    "The client needed a professional, multi-language online presence where travelers could browse curated tours and activities and submit booking inquiries, while the client's own team needed a way to manage tours, activities, and incoming bookings without building a full automated online payment system. SaharioCamelTours specifically wanted payments handled manually, outside the platform, rather than through an automated checkout.",
  approach:
    "The platform was built with Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Prisma. The public-facing site lets visitors browse tours and activities in multiple languages. An authenticated Customer Dashboard lets travelers manage their own bookings, and an authenticated Admin Dashboard lets the business manage tours, activities, and bookings internally. Booking requests and contact happen through an integrated WhatsApp flow, matching the client's manual-payment requirement.",
  uxUi:
    "The interface is built around three distinct flows sharing one system: a browsing experience for prospective travelers to explore tours and activities in their own language, a Customer Dashboard for travelers to keep track of their own bookings, and an Admin Dashboard for the SaharioCamelTours team to manage tours, activities, and bookings. Instead of a checkout flow, every booking path resolves into a WhatsApp conversation, keeping the interface simple and matching how the client actually closes bookings.",
  features: [
    "Tours & Activities browsing",
    "Booking requests",
    "Customer Dashboard (authenticated)",
    "Admin Dashboard (authenticated)",
    "Multi-language support",
    "Responsive UI",
    "WhatsApp-based contact/booking integration",
  ],
  responsive:
    "The platform is fully responsive and is used by real travelers browsing and booking tours on both desktop and mobile.",
  finalResult:
    "SaharaTravel is a real, production website actively used by SaharioCamelTours' business and travelers, not a demo or concept.",
};