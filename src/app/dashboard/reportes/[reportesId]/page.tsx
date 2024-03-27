import BreadCrumb from "@/components/breadcrumb";
import { ReportesForm } from "@/components/forms/reportes-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Reportes", link: "/dashboard/reportes" },
    { title: "Alta de reporte", link: "/dashboard/reportes/alta" },
  ]; 
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ReportesForm
        initialData={null}
        key={null}
      />
    </div>
  );
}