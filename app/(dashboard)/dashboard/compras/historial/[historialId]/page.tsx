import BreadCrumb from "@/components/breadcrumb";
import { HistorialForm } from "@/components/forms/historial-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Historial", link: "/dashboard/compras/historial" },
    { title: "Alta de compras de historial", link: "/dashboard/compras/historial/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <HistorialForm
        categoria={[
          { _id: "tarjeta", name: "tarjeta" },
          { _id: "certificado", name: "certificado" },
        ]}
        tPago={[
          { _id: "efectivo", name: "Efectivo" },
          { _id: "transferencia", name: "Transferencia" },
        ]}
        articulo={[
          { _id: "tarjeta", name: "tarjeta" },
          { _id: "certificado", name: "certificado" },
        ]}
        proveedor={[
          { _id: "tarjeta", name: "tarjeta" },
          { _id: "certificado", name: "certificado" },
        ]}
        initialData={null}
        key={null}
      />
    </div>
  );
}