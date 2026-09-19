import portrait from "../assets/images/carolina-santiago.png";
import logo from "../assets/images/tax-right-services-logo.webp";
import flyer from "../assets/images/tax-right-services-flyer.webp";

export const business = {
  name: "Tax Right Services",
  tagline: "Clear guidance. Personal attention.",
  owner: "Carolina Santiago",
  role: "Tax preparer & bookkeeper",
  phone: "575-571-8777",
  phoneHref: "tel:+15755718777",
  fax: "575-201-7361",
  email: "carolina@taxrightservices.com",
  emailHref: "mailto:carolina@taxrightservices.com",
  appointmentEmailHref:
    "mailto:carolina@taxrightservices.com?subject=Appointment%20request",
  location: "Mesquite, New Mexico",
  hours: "Monday–Friday, 8:00 am–5:00 pm",
  appointmentNote: "By appointment only",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Mesquite%2C%20New%20Mexico",
  // Supply the actual business Facebook URL here. An empty value shows plain text.
  facebookUrl: "",
};

export const images = { portrait, logo, flyer };
export const navigation = [
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
export const services = [
  {
    id: "tax",
    icon: "document",
    title: "Tax preparation",
    spanish: "Preparación de impuestos",
    description:
      "Personalized preparation and filing for individuals, families, self-employed workers, and small businesses in any state.",
    featured: true,
  },
  {
    id: "books",
    icon: "book",
    title: "Bookkeeping",
    spanish: "Contabilidad",
    description:
      "Keep your business records organized, so you can focus on the work you do best.",
  },
  {
    id: "payroll",
    icon: "people",
    title: "Payroll",
    spanish: "Nómina",
    description:
      "Personal assistance with your payroll needs and the details that come with paying your team.",
  },
  {
    id: "notary",
    icon: "stamp",
    title: "Notary services",
    spanish: "Servicios notariales",
    description:
      "Convenient notarization by appointment. Call ahead to discuss your document and what to bring.",
  },
  {
    id: "translations",
    icon: "language",
    title: "Translations",
    spanish: "Traducciones",
    description:
      "Document translation assistance to help you communicate clearly in English and Spanish.",
  },
  {
    id: "forms",
    icon: "form",
    title: "Help with forms",
    spanish: "Llenado de formas",
    description:
      "Patient, personal help completing forms and organizing the information they require.",
  },
  {
    id: "itin",
    icon: "card",
    title: "ITIN services",
    spanish: "Servicios de ITIN",
    description:
      "Assistance with Individual Taxpayer Identification Number paperwork. Contact us to discuss your needs.",
  },
];
export const faqs = [
  {
    question: "What services does Tax Right Services offer?",
    answer:
      "We provide tax preparation for individuals and businesses in any state, bookkeeping, payroll assistance, ITIN services, notary services, translations, and help filling out forms.",
  },
  {
    question: "What documents should I bring to my tax appointment?",
    answer:
      "Please bring a valid photo ID, Social Security or ITIN information, income documents such as W-2s or 1099s, and any records related to deductions or tax credits. We will let you know if additional documents are needed for your situation.",
  },
  {
    question: "Do you prepare taxes for both individuals and businesses?",
    answer:
      "Yes. We help individuals, families, self-employed workers, and small-business owners prepare and file their tax returns in any state.",
  },
  {
    question: "Are your services available in Spanish?",
    answer:
      "Yes. We proudly assist clients in both English and Spanish so they can receive clear, personalized help in the language they are most comfortable using.",
    spanish:
      "Sí, hablamos español. Con gusto le ayudamos en el idioma que prefiera.",
  },
  {
    question: "Do I need to schedule an appointment?",
    answer:
      "Yes. Tax Right Services operates by appointment only. Please call or email Carolina to schedule your appointment.",
    contact: true,
  },
];
export const commitments = [
  {
    title: "In your language",
    description: "Clear communication in English and Spanish.",
    icon: "language",
  },
  {
    title: "With personal attention",
    description: "Time to ask questions and understand your next step.",
    icon: "people",
  },
  {
    title: "With care and discretion",
    description: "Respectful handling of your personal information.",
    icon: "shield",
  },
];
