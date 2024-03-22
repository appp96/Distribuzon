import { supabase } from "@/lib/supabase"

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