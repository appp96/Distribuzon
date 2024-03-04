import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/employee-tables/client";
import { empleados } from "@/constants/data";

const breadcrumbItems = [{ title: "Employee", link: "/dashboard/employee" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={empleados} />
      </div>
    </>
  ); 
}