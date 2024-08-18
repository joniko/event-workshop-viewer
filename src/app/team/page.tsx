import React from "react";
import Image from "next/image";
import WavyBackground from "@/components/WavyBackground";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Juan Pérez",
    role: "Director",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    name: "María García",
    role: "Coordinadora de Eventos",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    name: "Carlos Rodríguez",
    role: "Líder de Alabanza",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    name: "Ana Martínez",
    role: "Coordinadora de Voluntarios",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    name: "Luis Sánchez",
    role: "Encargado de Logística",
    imageUrl: "/api/placeholder/150/150",
  },
  {
    name: "Elena Torres",
    role: "Coordinadora de Talleres",
    imageUrl: "/api/placeholder/150/150",
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
    <Image
      src={imageUrl}
      alt={name}
      width={150}
      height={150}
      className="rounded-full mb-4"
    />
    <h3 className="text-lg font-semibold text-indigo-800">{name}</h3>
    <p className="text-sm text-indigo-600">{role}</p>
  </div>
);

export default function TeamPage() {
  return (
    <main className="container flex flex-col px-4 py-8 mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold text-indigo-800 mt-8 mb-4">
        Nuestro Equipo
      </h1>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">
          Quiénes Somos
        </h2>
        <p className="text-indigo-900">
          Nuestro equipo está compuesto por personas apasionadas y dedicadas,
          comprometidas con hacer de Cumbre Generaciones 2024 una experiencia
          transformadora para todos los participantes. Cada miembro aporta sus
          talentos y experiencias únicas para crear un evento que inspire,
          eduque y conecte a nuestra comunidad. Desde la planificación logística
          hasta la coordinación de talleres y la dirección espiritual,
          trabajamos unidos con un objetivo común: impactar positivamente la
          vida de cada asistente y fortalecer nuestra fe colectiva.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </main>
  );
}
