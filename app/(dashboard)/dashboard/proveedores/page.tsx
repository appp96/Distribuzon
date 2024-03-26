import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/proveedores-tables/client";
import { proveedores } from "@/constants/data";

const breadcrumbItems = [{ title: "Proveedores", link: "/dashboard/proveedores" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={proveedores} />
      </div>
    </>
  );  
}