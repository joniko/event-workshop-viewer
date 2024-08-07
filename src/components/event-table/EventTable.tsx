import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTableToolbar } from "./DataTableToolbar";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { Ticket } from '@/types';  // Importa el tipo Ticket desde el archivo compartido

interface EventTableProps {
  data: Ticket[];
  hiddenColumns?: string[];
}

export function EventTable({ data, hiddenColumns = [] }: EventTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'Apellido', desc: false }
  ]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    () =>
      hiddenColumns.reduce((acc, column) => {
        acc[column] = false;
        return acc;
      }, {} as Record<string, boolean>)
  );

  const columns = useMemo(() => {
    return Object.keys(data[0] || {}).map((key) => ({
      accessorKey: key,
      header: ({ column }: { column: any }) => <DataTableColumnHeader column={column} title={key} />,
    }));
  }, [data]);

  const visibleColumns = useMemo(() => {
    return columns.filter(column => columnVisibility[column.accessorKey] !== false);
  }, [columns, columnVisibility]);

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter(row =>
      visibleColumns.some(column => {
        const value = row[column.accessorKey as keyof Ticket];
        return value !== undefined && value !== null && String(value).toLowerCase().includes(globalFilter.toLowerCase());
      })
    );
  }, [data, globalFilter, visibleColumns]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { columnFilters, sorting, columnVisibility },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
      sorting: [{ id: 'Apellido', desc: false }],
    },
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No se encontraron resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}