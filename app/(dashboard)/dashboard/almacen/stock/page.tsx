import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/stock-tables/client";
import { stock } from "@/constants/data";

const breadcrumbItems = [{ title: "Stock", link: "/dashboard/stock" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={stock} />
      </div>
    </>
  ); 
}