import React from "react";
import InternalLayout from "@/components/InternalLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LocationsTab: React.FC = () => {
  const workshopData = [
    {
      location: "Auditorio CIE, CIE",
      saturday: "Taller para adolescentes",
      sunday: "Cómo escuchar la voz de Dios",
    },
    {
      location: "Aula Magna, CIE",
      saturday: "Generación emergente, la iglesia de niños",
      sunday: "Noviazgos del cielo",
    },
    {
      location: "Auditorio Rafael Hiatt, Entrepiso, Catedral",
      saturday: "Una vida de milagros",
      sunday: "Diseño original: Cómo ministrar en el tiempo de las ideologías",
    },
    {
      location: "Aula 16 – 2do piso, Catedral",
      saturday: "Redes sociales sin límites",
      sunday: "Generación que avanza: Los jóvenes abriendo caminos",
    },
    {
      location: "Aula 10 – 2do piso, Catedral",
      saturday: "Finanzas personales y ministeriales",
      sunday: "Genera espacios para profesionales en la Iglesia",
    },
    {
      location: "Aula 9 – 2do piso, Catedral",
      saturday: "ExpresArte: el arte como medio de expresión",
      sunday: "Generación de Fuego: El tiempo de los adolescentes",
    },
    {
      location: "Aula 8 – 1er piso, Catedral",
      saturday: "Evangelismo sobrenatural",
      sunday: "Cómo formar un Ministerio de deportes",
    },
  ];

  return (
    <div className="space-y-1 bg-indigo-700 sm:mx-auto sm:w-full max-w-4xl">
      <div className="rounded-md border bg-white border-indigo-800">
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-200">
              <TableHead className="text-indigo-700">Ubicación</TableHead>
              <TableHead className="text-indigo-700">Sábado</TableHead>
              <TableHead className="text-indigo-700">Domingo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workshopData.map((workshop, index) => (
              <TableRow key={index} className="border-neutral-200">
                <TableCell className="text-indigo-950 font-medium">
                  {workshop.location}
                </TableCell>
                <TableCell className="text-indigo-950">
                  {workshop.saturday}
                </TableCell>
                <TableCell className="text-indigo-950">
                  {workshop.sunday}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default function LocationsPage() {
  return (
    <InternalLayout>
      <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-indigo-800 mt-8 mb-4">
          Ubicaciones
        </h1>
        <LocationsTab />
      </main>
    </InternalLayout>
  );
}
