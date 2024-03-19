"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Proveedores } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Proveedores>[] = [
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
    accessorKey: "nombre",
    header: "NOMBRE",
  },
  {
    accessorKey: "razonSocial",
    header: "RAZÓN SOCIAL",
  },
  {
    accessorKey: "direccion",
    header: "DIRECCIÓN",
  },
  {
    accessorKey: "contacto",
    header: "CONTACTO",
  },
  {
    accessorKey: "telefono",
    header: "TELÉFONO",
  },
  {
    id: "acciones",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
