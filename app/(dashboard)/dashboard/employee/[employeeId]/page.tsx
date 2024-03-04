import BreadCrumb from "@/components/breadcrumb";
import { EmployeeForm } from "@/components/forms/employee-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Empleados", link: "/dashboard/employee" },
    { title: "Crear", link: "/dashboard/employee/crear" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <EmployeeForm
        categories={[
          { _id: "tarjeta", name: "tarjeta" },
          { _id: "certificado", name: "certificado" },
        ]}
        initialData={null}
        key={null}
      />
    </div>
  );
}
