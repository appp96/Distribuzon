"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Historial } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Historial>[] = [
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
    accessorKey: "codTransaccion",
    header: "CODIGO TRANSACCIÓN",
  },
  {
    accessorKey: "factura",
    header: "FACTURA",
  },
  {
    accessorKey: "fecha",
    header: "FECHA",
  },
  {
    accessorKey: "noParte",
    header: "NO.PARTE",
  },
  {
    accessorKey: "articulo",
    header: "ARTICULO",
  },
  {
    accessorKey: "proveedor",
    header: "PROVEEDOR",
  },
  {
    accessorKey: "tPago",
    header: "TIPO DE PAGO",
  },
  {
    accessorKey: "precioCompra",
    header: "PRECIO DE COMPRA",
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
