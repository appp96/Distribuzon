"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Articulos } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface ArticulosClientProps {
  data: Articulos[];
}

export const UserClient: React.FC<ArticulosClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Artículos (${data.length})`}
          description="Administración de artículos"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/articulos/alta`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Agregar
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};