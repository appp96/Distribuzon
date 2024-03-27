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
  ordTransaccion: z
    .string()
    .min(10, { message: "La orden de transacción debe de tener al menos 10 dígitos" }),
  fecha: z
    .string()
    .min(8, { message: "La fecha debe de tener al menos 8 dígitos" }),
  tPago: z.string().min(1, { message: "Por favor selecciona un tpago" }),
  articulo: z.string().min(1, { message: "Por favor selecciona un tpago" }),
  proveedor: z.string().min(1, { message: "Por favor selecciona un tpago" }),
  stock: z.coerce.number(),
  refPrecio: z.coerce.number(),
  categoria: z.string().min(1, { message: "Por favor selecciona una categoría" }),
  cantidad:  z.coerce.number(),
  totalStock: z.coerce.number(),
  precioCompra: z.coerce.number(),
  referencia: z
    .string()
    .min(10, { message: "La referencia(Factura) debe de tener al menos 10 dígitos" }),
});

type HistorialFormValues = z.infer<typeof formSchema>;

interface HistorialFormProps {
  initialData: any | null;
  categoria: any;
  tPago: any;
  articulo: any;
  proveedor: any;
}

export const HistorialForm: React.FC<HistorialFormProps> = ({
  initialData,
  categoria,
  tPago,
  articulo,
  proveedor,
}) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = initialData ? "Editar artículo" : "Alta de artículo de historial";
  const description = initialData ? "Editar a almacén" : "Agregar artículo nuevo de historial";
  const toastMessage = initialData ? "Artículo actualizado" : "Articulo de historial creado";
  const action = initialData ? "Guardar cambios" : "Crear";

  const defaultValues = initialData
    ? initialData
    : {
        ordTransaccion:"",
        fecha:"",
        tPago:"",
        articulo:"",
        proveedor:"",
        stock: 1,
        refPrecio: 1,
        categoria:"",
        cantidad:1,
        totalStock:1,
        precioCompra:1,
        referencia:"",
      };

  const form = useForm<HistorialFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: HistorialFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      router.refresh();
      router.push(`/dashboard/compras/historial`);
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
      router.push(`/${params.storeId}/compras/historial`);
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
              name="ordTransaccion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Orden de Transacción</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
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
              name="tPago"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>T.Pago</FormLabel>
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
                          placeholder="Selecciona T.Pago"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {tPago.map((tPago) => (
                        <SelectItem key={tPago._id} value={tPago._id}>
                          {tPago.name}
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
              name="articulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Articulo</FormLabel>
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
                          placeholder="Selecciona articulo"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {articulo.map((articulo) => (
                        <SelectItem key={articulo._id} value={articulo._id}>
                          {articulo.name}
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
              name="proveedor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proveedor</FormLabel>
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
                          placeholder="Selecciona proveedor"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {proveedor.map((proveedor) => (
                        <SelectItem key={proveedor._id} value={proveedor._id}>
                          {proveedor.name}
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
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="refPrecio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia precio</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
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
                          placeholder="Selecciona categoria"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {categoria.map((categoria) => (
                        <SelectItem key={categoria._id} value={categoria._id}>
                          {categoria.name}
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
                  <FormLabel>Total Stock</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            /> 
            <FormField
              control={form.control}
              name="precioCompra"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio de compra</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            /> 
            <FormField
              control={form.control}
              name="referencia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia</FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="FACT-2024-XXXX" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            /> 
          </div>
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