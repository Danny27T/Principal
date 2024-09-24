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
  { label: "Blogs", href: "/blogs" },
  { label: "Valoraciones", href: "/testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Customer",
    image: user1,
    text: "Estoy muy satisfecho con el servicio recibido. El equipo fue muy atento, profesional y me brindó resultados que superaron mis expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Customer",
    image: user2,
    text: "No podría estar más contenta con el tratamiento. La creatividad y la habilidad para resolver problemas del equipo fueron claves para lograr una sonrisa perfecta.",
  },
  {
    user: "David Johnson",
    company: "Customer",
    image: user3,
    text: "Trabajar con este consultorio fue un placer. La atención a los detalles y el compromiso con la excelencia son realmente destacables. Lo recomiendo a todos.",
  },
  {
    user: "Ronee Brown",
    company: "Customer",
    image: user4,
    text: "El equipo del consultorio fue un cambio total para mi tratamiento dental. Su atención al detalle y soluciones innovadoras ayudaron a mejorar mi salud bucal rápidamente.",
  },
  {
    user: "Michael Wilson",
    company: "Customer",
    image: user5,
    text: "Estoy asombrado por el nivel de profesionalismo y dedicación del equipo. Lograron superar mis expectativas y brindarme resultados increíbles.",
  },
  {
    user: "Emily Davis",
    company: "Customer",
    image: user6,
    text: "El equipo se esforzó al máximo para asegurar el éxito de mi tratamiento. Su experiencia y dedicación no tienen comparación. ¡Sin duda, volveré en el futuro!",
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
    description: "Limpieza dental profunda para prevenir caries y mantener una salud bucal óptima.",
    link: "BlogProfilaxis"
  },
  {
    title: "Restauraciones",
    description: "Reparación de piezas dañadas mediante empastes y otros procedimientos para devolver la funcionalidad.",
    link: "BlogRestauraciones"
  },
  {
    title: "Tratamientos protésicos",
    description: "Colocación de prótesis dentales que reemplazan dientes perdidos y mejoran la estética.",
    link: "BlogProtesicos"
  },
  {
    title: "Endodoncia",
    description: "Tratamiento de conductos para eliminar infecciones y salvar dientes dañados.",
    link: "BlogEndodoncia"
  },
  {
    title: "Ortodoncia",
    description: "Corrección de malposiciones dentales mediante brackets y alineadores para una sonrisa alineada.",
    link: "BlogOrtodoncia"
  },
  {
    title: "Aclaramiento dental",
    description: "Blanqueamiento profesional para mejorar el color de los dientes y lograr una sonrisa más brillante.",
    link: "BlogAclaramiento"
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
