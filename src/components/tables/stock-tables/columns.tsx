"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Stock } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Stock>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todo"
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
  /*
  id: 1,
    codigo: "TM-2024-02756",
    fecha: "12/01/2024",
    noParte: "11008528",
    cliente: "TYG",
    referencia: "F3280",
    prducto: "Panel",
    tipo: "Salida",
    cantidad: 6000,
    unidad: "Pieza",
  */
  {
    accessorKey: "no",
    header: "NO",
  },
  {
    accessorKey: "noParte",
    header: "NO.PARTE",
  },
  {
    accessorKey: "nombre",
    header: "NOMBRE",
  },
  {
    accessorKey: "cliente",
    header: "CLIENTE",
  },
  {
    accessorKey: "precioCompra",
    header: "PRECIO COMPRA",
  },
  {
    accessorKey: "precioVenta",
    header: "PRECIO VENTA",
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
    accessorKey: "edoStock",
    header: "ESTADO STOCK",
  },
  {
    id: "acciones",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
