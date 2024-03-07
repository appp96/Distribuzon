"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Stock } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StockClientProps {
  data: Stock[];
}

export const UserClient: React.FC<StockClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Stock (${data.length})`}
          description="Administración de stock"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/almacen/stock/alta`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Agregar
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="nombre" columns={columns} data={data} />
    </>
  );
};