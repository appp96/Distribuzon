import BreadCrumb from "@/components/breadcrumb";
import { ArticulosForm } from "@/components/forms/articulos-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Articulos", link: "/dashboard/articulos" },
    { title: "Alta de artículo de compra", link: "/dashboard/articulos/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ArticulosForm
        categoria={[
          { _id: "suaje", name: "suaje" },
          { _id: "materiaPrima", name: "materiaPrima" },
          { _id: "paquete", name: "paquete" },
        ]}
        unidad={[
            { _id: "piezas", name: "piezas" },
            { _id: "caja", name: "caja" },
          ]}
        initialData={null}
        key={null}
      />
    </div>
  );
}