import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/salidas-tables/client";
import { salidas } from "@/constants/data";

const breadcrumbItems = [{ title: "Salidas", link: "/dashboard/salidas" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={salidas} />
      </div>
    </>
  );  
}