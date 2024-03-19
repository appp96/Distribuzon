import BreadCrumb from "@/components/breadcrumb";
import { ProveedoresForm } from "@/components/forms/proveedores-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Proveedores", link: "/dashboard/proveedores" },
    { title: "Alta de proveedor", link: "/dashboard/proveedores/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ProveedoresForm
        initialData={null}
        key={null}
      />
    </div>
  );
}