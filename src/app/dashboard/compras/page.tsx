import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/compras-tables/client";
import { compras } from "@/constants/data";

const breadcrumbItems = [{ title: "Almacen", link: "/dashboard/almacen" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={compras} />
      </div>
    </>
  );  
}