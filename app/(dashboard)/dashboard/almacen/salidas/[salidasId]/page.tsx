import BreadCrumb from "@/components/breadcrumb";
import { SalidasForm } from "@/components/forms/salidas-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Salidas", link: "/dashboard/salidas" },
    { title: "Alta de artículo de salida", link: "/dashboard/salidas/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <SalidasForm
        producto={[
          { _id: "expediente", name: "expediente" },
          { _id: "caja", name: "caja" },
        ]}
        initialData={null}
        key={null}
      />
    </div>
  );
}