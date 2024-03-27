"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Proveedores } from "@/constants/data";

export const columns: ColumnDef<Proveedores>[] = [
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
