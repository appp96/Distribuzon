import BreadCrumb from "@/components/breadcrumb";
import { EntradasForm } from "@/components/forms/entradas-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Entradas", link: "/dashboard/almacen/entradas" },
    { title: "Alta de artículo de entrada", link: "/dashboard/almacen/entradas/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <EntradasForm
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
