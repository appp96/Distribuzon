"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Articulos } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Articulos>[] = [
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
    accessorKey: "foto",
    header: "FOTO",
  },
  {
    accessorKey: "descripcion",
    header: "DESCRIPCIÓN",
  },
  {
    accessorKey: "categoria",
    header: "CATEGORÍA",
  },
  {
    accessorKey: "medida",
    header: "MEDIDA (CM)",
  },
  {
    accessorKey: "precioCompra",
    header: "PRECIO DE COMPRA",
  },
  {
    accessorKey: "edoStock",
    header: "ESTADO DE STOCK",
  },
  {
    accessorKey: "stock",
    header: "STOCK",
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
