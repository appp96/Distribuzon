import BreadCrumb from "@/components/breadcrumb";
import { AlmacenForm } from "@/components/forms/almacen-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Almacen", link: "/dashboard/almacen" },
    { title: "Alta de artículo de entrada", link: "/dashboard/almacen/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <AlmacenForm
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