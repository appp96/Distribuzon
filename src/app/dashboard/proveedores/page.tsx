import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import db from "@/db/db";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProveedoresPage() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-start justify-between">
          <Heading title={`Proveedores`}/>

          <Link
            href={"/dashboard/proveedores/nuevo"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Agregar
          </Link>
        </div>

        <Separator />

        <ProveedoresTable />

      </div>
    </>
  );
}

async function ProveedoresTable(){
  const proveedores = await db.proveedor.findMany({ 
    select: {
      id: true,
      nombre: true,
      razon_social: true,
      direccion: true,
      contacto: true,
      telefono: true,
    },
    orderBy: { id: "desc" },
  })

  return (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>No</TableHead>
        <TableHead>Nombre</TableHead>
        <TableHead>Razón social</TableHead>
        <TableHead>Dirección</TableHead>
        <TableHead>Contacto</TableHead>
        <TableHead>Teléfono</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {proveedores.map(proveedor => (
        <TableRow key={proveedor.id}>
          <TableCell>{proveedor.id}</TableCell>
          <TableCell>{proveedor.nombre}</TableCell>
          <TableCell>{proveedor.razon_social}</TableCell>
          <TableCell>{proveedor.direccion}</TableCell>
          <TableCell>{proveedor.contacto}</TableCell>
          <TableCell>{proveedor.telefono}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}