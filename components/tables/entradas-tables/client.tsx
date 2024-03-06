"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Entradas } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface EntradasClientProps {
  data: Entradas[];
}

export const UserClient: React.FC<EntradasClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Almacen (${data.length})`}
          description="Administración de entradas almacén"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/almacen/entradas/alta`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Agregar
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};