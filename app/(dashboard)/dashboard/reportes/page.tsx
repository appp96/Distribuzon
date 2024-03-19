import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/reportes-tables/client";
import { reportes } from "@/constants/data";

const breadcrumbItems = [{ title: "Reportes", link: "/dashboard/reportes" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={reportes} />
      </div>
    </>
  );  
}