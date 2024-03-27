import BreadCrumb from "@/components/breadcrumb";
import { ComprasForm } from "@/components/forms/compras-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Compras", link: "/dashboard/compras" },
    { title: "Alta de compras", link: "/dashboard/compras/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ComprasForm
        categorias={[
          { _id: "tarjeta", name: "tarjeta" },
          { _id: "certificado", name: "certificado" },
        ]}
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