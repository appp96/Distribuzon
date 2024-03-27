"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Entradas } from "@/constants/data";

export const columns: ColumnDef<Entradas>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "codigo",
    header: "Código",
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    accessorKey: "noParte",
    header: "No parte",
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
  },
  {
    accessorKey: "referencia",
    header: "Referencia",
  },
  {
    accessorKey: "producto",
    header: "Producto",
  },
  {
    accessorKey: "cantidad",
    header: "Cantidad",
  },
  {
    accessorKey: "unidad",
    header: "Unidad",
  },
  {
    id: "acciones",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
