import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "¿Quiénes Somos?", href: "/features" },
  { label: "Servicios", href: "/workflow" },
  { label: "Blogs", href: "/pricing" },
  { label: "Valoraciones", href: "/testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Visión",
    description:
      "Ser el consultorio dental líder en Latacunga y la región de Cotopaxi, reconocido por su excelencia en la atención odontológica integral, utilizando tecnología avanzada y brindando un ambiente acogedor y de confianza que contribuya a la salud y bienestar bucodental de toda la comunidad.",
  },
  {
    icon: <Fingerprint />,
    text: "Misión",
    description:
      "Proporcionar servicios odontológicos de alta calidad en un entorno seguro y cómodo, comprometidos con la salud bucodental de nuestros pacientes a través de tratamientos personalizados, el uso de tecnología innovadora, y un equipo profesional calificado, para mejorar la calidad de vida y fomentar la prevención en el cuidado dental de nuestros pacientes.",
  },
  {
    icon: <ShieldHalf />,
    text: "Trayectoria",
    description:
      "El consultorio fue creado hace más de 20 años atrás por Fernando Ortiz Cevallos. Graduado en universidad Central desde ese entonces ha Sido el principal objetivo brindar una atención de calidad enfocada a ayudar a la población a obtener la  salud oral . Sin descuidar el enfoque humanitario con sensibilización en la población.",
  },
  {
    icon: <BatteryCharging />,
    text: "Objetivo 1",
    description:
      "Ofrecer tratamientos dentales integrales y personalizados, garantizando la máxima calidad en cada intervención y promoviendo la satisfacción del paciente.",
  },
  {
    icon: <PlugZap />,
    text: "Objetivo 2",
    description:
      "Crear un ambiente acogedor y de confianza, donde los pacientes se sientan cómodos y seguros, garantizando una experiencia positiva en cada visita.",
  },
  {
    icon: <GlobeLock />,
    text: "Obejtivo 3",
    description:
      "Fomentar la formación continua y el desarrollo profesional de nuestro equipo, asegurando un alto nivel de competencia y ética en la atención al paciente.",
  },
];

export const checklistItems = [
  {
    title: "Tratamientos de profilaxis",
    description:
      "XXXXXXXXXXX.",
  },
  {
    title: "Restauraciones",
    description:
      "XXXXXXXXXXX.",
  },
  {
    title: "Tratamientos protésicos",
    description:
      "XXXXXXXXXXX.",
  },
  {
    title: "Endodoncia",
    description:
      "XXXXXXXXXXX.",
  },
  {
    title: "Ortodoncia",
    description:
      "XXXXXXXXXXX.",
  },
  {
    title: "Aclaramiento dental",
    description:
      "XXXXXXXXXXX.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
