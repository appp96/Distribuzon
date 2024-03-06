"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
// import FileUpload from "@/components/FileUpload";
import { useToast } from "../ui/use-toast";
import FileUpload from "../file-upload";
const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string(),
});
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  codigoTransaccion: z
    .string()
    .min(12, { message: "El código debe de tener al menos 12 dígitos" }),
  fecha: z
    .string()
    .min(10, { message: "La fecha debe de tener al menos 10 dígitos" }),
  referencia: z
    .string()
    .min(3, { message: "El producto debe de tener al menos 3 dígitos" }),
  stock:z.coerce.number(),
  cantidad: z.coerce.number(),
  totalStock: z.coerce.number(),
  medida: z.coerce.number(),
  producto: z.string().min(1, { message: "Por favor selecciona un producto" }),
});

type SalidasFormValues = z.infer<typeof formSchema>;

interface SalidasFormProps {
  initialData: any | null;
  producto: any;
}

export const SalidasForm: React.FC<SalidasFormProps> = ({
  initialData,
  producto,
}) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = initialData ? "Editar artículo" : "Alta de artículo de salida";
  const description = initialData ? "Editar a salidas" : "Agregar artículo nuevo de salida";
  const toastMessage = initialData ? "Artículo actualizado" : "Articulo de salida creado";
  const action = initialData ? "Guardar cambios" : "Crear";

  const defaultValues = initialData
    ? initialData
    : {
        id: 1,
        name:"",
        codigoTransaccion: "",
        descripcion: "",
        medidas: "",
        categoria: "",
        unidad:"",
        precioCompra: 0,
        stockMin: 0,
        referencia: "",
      };

  const form = useForm<SalidasFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: SalidasFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      router.refresh();
      router.push(`/dashboard/salidas`);
      toast({
        variant: "destructive",
        title: "Oh no! Algo salió mal.",
        description: "Hay un problema con tu solicitud.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Oh no! Algo salió mal.",
        description: "Hay un problema con tu solicitud.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/salidas`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <> 
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
          <FormField
              control={form.control}
              name="codigoTransaccion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código de transacción</FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="TM-2024-XXXXX" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fecha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="01-01-2024"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="producto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Producto</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Selecciona producto"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {producto.map((producto) => (
                        <SelectItem key={producto._id} value={producto._id}>
                          {producto.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock </FormLabel>
                  <FormControl>
                    <Input type="number" disabled={true} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cantidad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            /> 
            <FormField
              control={form.control}
              name="totalStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total stock</FormLabel>
                  <FormControl>
                    <Input type="number" disabled= {true} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            /> 
          </div>
          <FormField
              control={form.control}
              name="referencia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia (No.Factura)</FormLabel>
                  <FormControl>
                    <Input type="string" placeholder= "FAC-2024-32" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            /> 
          <Button className="bg-destructive hover:bg-destructive/90 ml-auto mr-5" type="submit">
            <Link href="./inicio">Cancelar</Link>
          </Button>
          <Button className="bg-cyan-500 hover:bg-cyan-600 ml-5"  disabled={loading} type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
