"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Salidas } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Salidas>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "no",
    header: "NO",
  },
  {
    accessorKey: "codigo",
    header: "CODIGO",
  },
  {
    accessorKey: "fecha",
    header: "FECHA",
  },
  {
    accessorKey: "noParte",
    header: "NO PARTE",
  },
  {
    accessorKey: "cliente",
    header: "CLIENTE",
  },
  {
    accessorKey: "referencia",
    header: "REFERENCIA",
  },
  {
    accessorKey: "producto",
    header: "PRODUCTO",
  },
  {
    accessorKey: "tipo",
    header: "TIPO",
  },
  {
    accessorKey: "cantidad",
    header: "CANTIDAD",
  },
  {
    accessorKey: "unidad",
    header: "UNIDAD",
  },
  {
    id: "acciones",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
