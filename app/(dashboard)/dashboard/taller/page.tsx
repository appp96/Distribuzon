import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/taller-tables/client";
import { taller } from "@/constants/data";

const breadcrumbItems = [{ title: "Taller", link: "/dashboard/taller" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={taller} />
      </div>
    </>
  ); 
}