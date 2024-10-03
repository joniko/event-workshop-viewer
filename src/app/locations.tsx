import React from "react";
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

  return (
    <div className="space-y-1 sm:mx-auto sm:w-full max-w-4xl">
      <div className="rounded-md border bg-white">
        <h1 className="text-2xl font-bold text-blue-600 m-4">Ubicaciones</h1>
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-200">
              <TableHead className="text-blue-700">Ubicación</TableHead>
              <TableHead className="text-blue-700">Sábado</TableHead>
              <TableHead className="text-blue-700">Domingo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workshopData.map((workshop, index) => (
              <TableRow key={index} className="border-neutral-200">
                <TableCell className="text-blue-950 font-medium">
                  {workshop.location}
                </TableCell>
                <TableCell className="text-blue-950">
                  {workshop.saturday}
                </TableCell>
                <TableCell className="text-blue-950">
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

export default LocationsTab;
