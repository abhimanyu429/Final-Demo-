/**
 * All editable company content lives here.
 * Company name and contact details are the verified details supplied by AL NASEEM.
 * Product categories are suggestions — edit them to match confirmed product lines.
 * Leave a field empty ("") to hide it from the page.
 */

export const company = {
  name: "AL NASEEM MEDICAL EQUIPMENT TR L.L.C",
  shortName: "AL NASEEM",
  tagline: "Medical Equipment TR L.L.C",
  location: "Sharjah, United Arab Emirates",
  shortIntro:
    "A medical equipment trading company based in Sharjah, UAE, supporting healthcare professionals and organisations with reliable equipment solutions and professional service.",
  address: "Shop No. 104, Qulaya Building, Sharjah, UAE.",
  email: "alnaseemmedicalequipment@gmail.com",
  phoneDisplay: "+971 54 147 4955",
  phoneHref: "tel:+971541474955",
  /** Not supplied yet — add opening hours here to show them. */
  businessHours: "",
  /** Paste a Google Maps "Embed a map" src URL here to show a live map. */
  mapEmbedUrl: "",
  mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=Qulaya+Building+Sharjah+UAE",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Our Expertise", href: "#expertise" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutHighlights = [
  { icon: "shield", title: "Quality Commitment", text: "Quality considerations guide how we source and supply." },
  { icon: "check", title: "Reliable Solutions", text: "Dependable equipment solutions for healthcare settings." },
  { icon: "service", title: "Professional Service", text: "Responsive, courteous support at every step." },
] as const;

/** Suggested categories — keep, edit or remove to reflect confirmed product lines. */
export const productCategories = [
  {
    image: "equipment",
    title: "Medical Equipment",
    description: "Equipment solutions for clinics, hospitals and healthcare facilities.",
  },
  {
    image: "diagnostic",
    title: "Diagnostic Equipment",
    description: "Devices that help healthcare professionals assess and monitor patients.",
  },
  {
    image: "hospital",
    title: "Hospital Equipment",
    description: "Essential equipment for wards, treatment rooms and patient care areas.",
  },
  {
    image: "instruments",
    title: "Medical Instruments",
    description: "Instruments used in everyday clinical and procedural settings.",
  },
  {
    image: "supplies",
    title: "Healthcare Supplies",
    description: "Everyday consumables that keep healthcare environments running.",
  },
  {
    image: "accessories",
    title: "Clinical Accessories",
    description: "Cables, sensors, cuffs and other accessories that complement equipment.",
  },
] as const;

export const expertise = [
  {
    icon: "stethoscope",
    title: "Medical Equipment Trading",
    description: "Connecting healthcare buyers with medical equipment solutions suited to their needs.",
  },
  {
    icon: "package",
    title: "Healthcare Product Supply",
    description: "Coordinating the supply of healthcare products with care and attention to detail.",
  },
  {
    icon: "headset",
    title: "Professional Customer Support",
    description: "Clear communication and helpful guidance from enquiry through to delivery.",
  },
  {
    icon: "handshake",
    title: "Business-to-Business Partnerships",
    description: "Working alongside clinics, hospitals and distributors as a dependable trade partner.",
  },
] as const;

export const pillars = [
  {
    icon: "users",
    title: "Customer-Focused Approach",
    description: "We listen closely and respond to the specific needs of every client.",
  },
  {
    icon: "badge",
    title: "Commitment to Quality",
    description: "Quality considerations guide the products we offer and how we deliver them.",
  },
  {
    icon: "handshake",
    title: "Reliable Business Relationships",
    description: "We value long-term relationships built on transparency and consistency.",
  },
  {
    icon: "clipboard",
    title: "Professional Service",
    description: "Courteous, knowledgeable and timely service in every interaction.",
  },
] as const;
