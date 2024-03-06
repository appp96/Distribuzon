import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/entradas-tables/client";
import { entradas } from "@/constants/data";

const breadcrumbItems = [{ title: "Entradas", link: "/dashboard/almacen/entradas" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={entradas} />
      </div>
    </>
  );  
}