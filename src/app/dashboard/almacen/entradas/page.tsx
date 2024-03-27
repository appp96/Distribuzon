import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/entradas-tables/columns";
import { EntradasTable } from "@/components/tables/entradas-tables/entradas-table";
import { Entradas, entradas } from "@/constants/data";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const breadcrumbItems = [{ title: "Entradas", link: "/dashboard/almacen/entradas" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const offset = (page - 1) * pageLimit;
  const entradaRes = await entradas;
  const totalEntradas = entradaRes.length; //1000
  const pageCount = Math.ceil(totalEntradas / pageLimit);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Entradas (${totalEntradas})`}
          />

          <Link
            href={"/dashboard/almacen/entradas/alta"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Agregar
          </Link>
        </div>
        <Separator />

        <EntradasTable
          pageNo={page}
          columns={columns}
          totalEntradas={totalEntradas}
          data={entradas}
          pageCount={pageCount}
        />

      </div>
    </>
  );
}