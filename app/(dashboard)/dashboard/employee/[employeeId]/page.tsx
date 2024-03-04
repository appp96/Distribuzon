import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Empleados", link: "/dashboard/employee" },
    { title: "Crear", link: "/dashboard/employee/crear" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ProductForm
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
