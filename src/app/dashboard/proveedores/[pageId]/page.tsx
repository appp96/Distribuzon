import BreadCrumb from "@/components/breadcrumb";
import { ProveedorForm } from "@/components/forms/ProveedorForm";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Proveedores", link: "/dashboard/proveedores" },
    { title: "Alta de proveedor", link: "/dashboard/proveedores/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ProveedorForm
        initialData={null}
        key={null}
      />
    </div>
  );
}