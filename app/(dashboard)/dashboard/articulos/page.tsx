import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/articulos-tables/client";
import { articulos } from "@/constants/data";

const breadcrumbItems = [{ title: "Articulos", link: "/dashboard/articulos" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={articulos} />
      </div>
    </>
  );  
}