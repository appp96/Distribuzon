import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/almacen-tables/client";
import { almacen } from "@/constants/data";

const breadcrumbItems = [{ title: "Almacen", link: "/dashboard/almacen" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={almacen} />
      </div>
    </>
  );  
}