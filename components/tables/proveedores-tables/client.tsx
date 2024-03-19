"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Proveedores } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface ProveedoresClientProps {
  data: Proveedores[];
}

export const UserClient: React.FC<ProveedoresClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Proveedores (${data.length})`}
          description="Administración de proveedores"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/proveedores/alta`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Agregar
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};