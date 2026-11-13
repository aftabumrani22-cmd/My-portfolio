/**
 * Centralized Site Configuration for Aftab Ali
 * Edit this file to update your personal details, contact URLs, resume path, and availability.
 */

export const siteConfig = {
  // Personal Brand
  name: "Aftab Ali",
  initials: "AA",
  role: "Computer Science Student & Frontend Developer",
  shortRole: "Frontend Developer",
  headline: "Building clear, useful web experiences.",
  intro:
    "I'm Aftab Ali, a Computer Science student focused on frontend development, thoughtful interfaces, and practical software projects.",
  location: "Lahore, Pakistan",
  education: {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    status: "Computer Science Student",
  },

  // Availability Indicator
  availability: {
    isAvailable: false,
    badgeText: "Available for Internships & Projects",
    details: "Actively seeking frontend internships, entry-level developer roles, and select freelance projects.",
  },

  // Document & Media Links
  cvPath: "/Aftab-Ali-CV.pdf", // Place your real PDF in the public/ folder with this name
  profileImage: "/profile.jpg", // Real profile picture from folder

  // Social & Professional Profiles
  // UPDATE THESE WITH YOUR REAL PROFILES
  socials: {
    github: "", // Add your profile URL when ready
    linkedin: "https://www.linkedin.com/in/aftab-ali-bb78162b1", // Updated LinkedIn profile
    whatsapp: "https://wa.me/923058274580",
    email: "aftab.developer112@gmail.com",
  },

  // Contact Form Settings
  contact: {
    formDisclaimer:
      "This form validates inputs locally. To receive messages directly in your inbox, connect Formspree, EmailJS, or Resend in siteConfig.",
    // Set to your Formspree form ID, Web3Forms key, or use mailto fallback
    formspreeId: "", // e.g. "xpwzaqvy"
    mailtoFallbackEmail: "aftab.developer112@gmail.com",
  },

  // Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
