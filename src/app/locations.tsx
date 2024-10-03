import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Workshop {
  name: string;
  description: string;
}

const workshops: Record<string, Workshop> = {
  "Evangelio Completo": {
    name: "Evangelio Completo",
    description:
      "Será una especialización para pastores, líderes, maestros y todo aquel que quiera poder creer, vivir y predicar el evangelio completo.",
  },
  "Iglesia Gloriosa": {
    name: "Iglesia Gloriosa",
    description:
      "Será una especialización de cómo ejercer el llamado de Dios con madurez, poniendo en práctica tu sacerdocio a tiempo completo, la implementación práctica de los 5 ministerios y siendo parte de la iglesia gloriosa que prepara el camino del regreso del Señor.",
  },
  "Gran Comisión": {
    name: "Gran Comisión",
    description:
      "Será una especialización para dirigida a todos aquellos que deseen extender el evangelio en su región, estableciendo un plan de acción para hacer discípulos de todas las naciones, haciendo avanzar el plan de Dios.",
  },
  "Adoración e Intercesión": {
    name: "Adoración e Intercesión",
    description:
      "Será una especialización dirigida a músicos, adoradores, intercesores y todos aquellos que deseen desarrollar estilo de vida profético a través de la adoración e intercesión corporativa en casa de oración.",
  },
};

const LocationsTab: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const workshopData = [
    {
      location: "Sector 1",
      saturday: "Evangelio Completo",
      sunday: "Evangelio Completo",
    },
    {
      location: "Sector 2",
      saturday: "Adoración e Intercesión",
      sunday: "Gran Comisión",
    },
    {
      location: "Sector 3",
      saturday: "Iglesia Gloriosa",
      sunday: "Iglesia Gloriosa",
    },
  ];

  const handleWorkshopClick = (workshopName: string) => {
    setSelectedWorkshop(
      selectedWorkshop === workshopName ? null : workshopName
    );
  };

  return (
    <div className="space-y-1 sm:mx-auto sm:w-full max-w-4xl">
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-200 space-x-2">
              <TableHead className="text-blue-700">Ubicación</TableHead>
              <TableHead className="text-blue-700">Sábado</TableHead>
              <TableHead className="text-blue-700">Domingo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workshopData.map((workshop, index) => (
              <React.Fragment key={index}>
                <TableRow className="border-neutral-200">
                  <TableCell className="text-blue-950 font-bold">
                    {workshop.location}
                  </TableCell>
                  <TableCell className="text-blue-950">
                    <button
                      onClick={() => handleWorkshopClick(workshop.saturday)}
                      className="text-blue-600 hover:underline"
                    >
                      {workshop.saturday}
                    </button>
                  </TableCell>
                  <TableCell className="text-blue-950">
                    <button
                      onClick={() => handleWorkshopClick(workshop.sunday)}
                      className="text-blue-600 hover:underline"
                    >
                      {workshop.sunday}
                    </button>
                  </TableCell>
                </TableRow>
                {(selectedWorkshop === workshop.saturday ||
                  selectedWorkshop === workshop.sunday) && (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="bg-cyan-50 text-blue-900 p-4"
                    >
                      <h4 className="font-bold mb-2">
                        {workshops[selectedWorkshop].name}
                      </h4>
                      <p>{workshops[selectedWorkshop].description}</p>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LocationsTab;
