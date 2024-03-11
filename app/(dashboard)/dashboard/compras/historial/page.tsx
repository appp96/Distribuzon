import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/historial-tables/client";
import { historial } from "@/constants/data";

const breadcrumbItems = [{ title: "Historial", link: "/dashboard/compras/historial" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={historial} />
      </div>
    </>
  );  
}