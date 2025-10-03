import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";

type Ticket = {
  TicketID: string;
  'Entrada: Número': string;
  'Pedido: Número': string;
  'Evento: Nombre': string;
  'Pedido: Estado': string;
  'Pedido: Fecha': string;
  [key: string]: string;
};

interface EventTableProps {
  data: Ticket[];
  hiddenColumns?: string[];
}

const EventTable: React.FC<EventTableProps> = ({ data, hiddenColumns = [] }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(() => {
    const allColumns: ColumnDef<Ticket>[] = [
      {
        accessorKey: "TicketID",
        header: "Ticket ID",
      },
      {
        accessorKey: "Entrada: Número",
        header: "Número de Entrada",
      },
      {
        accessorKey: "Pedido:0 Número",
        header: "Número de Pedido",
      },
      {
        accessorKey: "Evento: Nombre",
        header: "Nombre del Evento",
      },
      {
        accessorKey: "Pedido: Estado",
        header: "Estado del Pedido",
      },
      {
        accessorKey: "Pedido: Fecha",
        header: "Fecha del Pedido",
      },
    ];

    // Agregar columnas dinámicas basadas en campos personalizados
    if (data.length > 0) {
      const customFields = Object.keys(data[0]).filter(key => 
        !allColumns.find(col => (col as any).accessorKey === key) && 
        key !== 'orderMeta'
      );
      customFields.forEach(field => {
        allColumns.push({
          accessorKey: field,
          header: field,
        });
      });
    }

    // Filtrar las columnas ocultas
    return allColumns.filter(col => {
      const accessorKey = (col as any).accessorKey;
      const header = (col as any).header;
      return !hiddenColumns.includes(accessorKey) && !hiddenColumns.includes(header);
    });
  }, [data, hiddenColumns]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      <Input
        placeholder="Buscar en todas las columnas..."
        value={globalFilter ?? ""}
        onChange={(event) => setGlobalFilter(String(event.target.value))}
        className="max-w-sm"
      />
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No se encontraron resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              className={!table.getCanPreviousPage() ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          {Array.from({length: table.getPageCount()}, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => table.setPageIndex(page - 1)}
                isActive={table.getState().pagination.pageIndex === page - 1}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => table.nextPage()}
              className={!table.getCanNextPage() ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default EventTable;