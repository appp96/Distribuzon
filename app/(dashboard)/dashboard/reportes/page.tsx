import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/reportes-tables/client";
import { reportes } from "@/constants/data";
import { supabase } from "@/lib/supabase"


const breadcrumbItems = [{ title: "Reportes", link: "/dashboard/reportes" }];
const articulos = async () => {
  try {
      let { data: articulos, error } = await supabase
      .from('Articulos')
      .select('*')

      if (articulos) {
          console.log(articulos)
      }
  } catch (error) {
      console.log(error)
  }
}

articulos();
export default function page() {
  return ( 
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={reportes} />
      </div>
    </>
  );  
}