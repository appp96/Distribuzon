import BreadCrumb from "@/components/breadcrumb";
import { StockForm } from "@/components/forms/stock-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Stock", link: "/dashboard/stock" },
    { title: "Alta de stock", link: "/dashboard/almacen/stock/alta" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <StockForm
        unidad={[
          { _id: "pieza", name: "pieza" },
          { _id: "caja", name: "caja" },
        ]}
        initialData={null}
        key={null}
      />
    </div>
  );
}
