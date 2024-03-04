import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/almacen-tables/columns";
import { AlmacenTable } from "@/components/tables/almacen-tables/almacen-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Almacen } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [{ title: "Almacén", link: "/dashboard/almacen" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const id = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
      (id ? `&buscar=${id}` : ""),
  );
  const almacenRes = await res.json();
  const totalUsers = almacenRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const almacen: Almacen[] = almacenRes.users;
  
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Almacén (${totalUsers})`}
            description="Tabla de productos en almacén"
          />

          <Link
            href={"/dashboard/almacen/alta"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Agregar
          </Link>
        </div>
        <Separator />

        <AlmacenTable
          searchKey="id"
          pageNo={page}
          columns={columns}
          totalUsers={totalUsers}
          data={almacen}
          pageCount={pageCount}
        />
       
      </div>
    </>
  );
}