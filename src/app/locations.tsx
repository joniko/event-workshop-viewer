import React from "react";
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
  color: string;
  materialUrl: string;
}

const workshops: Record<string, Workshop> = {
  "Evangelio Completo": {
    name: "Evangelio Completo",
    description:
      "Será una especialización para pastores, líderes, maestros y todo aquel que quiera poder creer, vivir y predicar el evangelio completo.",
    color: "bg-blue-500",
    materialUrl: "/materials/evangelio-completo.pdf",
  },
  "Iglesia Gloriosa": {
    name: "Iglesia Gloriosa",
    description:
      "Será una especialización de cómo ejercer el llamado de Dios con madurez, poniendo en práctica tu sacerdocio a tiempo completo, la implementación práctica de los 5 ministerios y siendo parte de la iglesia gloriosa que prepara el camino del regreso del Señor.",
    color: "bg-green-500",
    materialUrl: "/materials/iglesia-gloriosa.pdf",
  },
  "Gran Comisión": {
    name: "Gran Comisión",
    description:
      "Será una especialización para dirigida a todos aquellos que deseen extender el evangelio en su región, estableciendo un plan de acción para hacer discípulos de todas las naciones, haciendo avanzar el plan de Dios.",
    color: "bg-yellow-500",
    materialUrl: "/materials/gran-comision.pdf",
  },
  "Adoración e Intercesión": {
    name: "Adoración e Intercesión",
    description:
      "Será una especialización dirigida a músicos, adoradores, intercesores y todos aquellos que deseen desarrollar estilo de vida profético a través de la adoración e intercesión corporativa en casa de oración.",
    color: "bg-purple-500",
    materialUrl: "/materials/adoracion-intercesion.pdf",
  },
};

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

const LocationsTab: React.FC = () => {
  return (
    <div className="space-y-1 sm:mx-auto sm:w-full max-w-4xl">
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow className=" space-x-2">
              <TableHead className="text-primary">Ubicación</TableHead>
              <TableHead className="text-blue-700">Viernes</TableHead>
              <TableHead className="text-blue-700">Sábado</TableHead>
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
                    <WorkshopInfo workshop={workshops[workshop.saturday]} />
                  </TableCell>
                  <TableCell className="text-blue-950">
                    <WorkshopInfo workshop={workshops[workshop.sunday]} />
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const WorkshopInfo: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <span className={`w-4 h-4 rounded-full ${workshop.color}`}></span>
      <span className="font-semibold">{workshop.name}</span>
    </div>
    <p className="text-sm text-gray-600">{workshop.description}</p>
    <a
      href={workshop.materialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Descargar Material
    </a>
  </div>
);

export default LocationsTab;
