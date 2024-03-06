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
  idProducto:z
  .string()
  .min(6, { message: "El idProducto debe de tener al menos 6 dígitos" }),
  noParte: z
    .string()
    .min(6, { message: "El número de parte debe de tener al menos 6 dígitos" }),
  imgUrl: z
    .array(ImgSchema)
    .max(IMG_MAX_LIMIT, { message: "Sólo puedes subir 3 imagenes" })
    .min(1, { message: "Tienes que subir al menos 1 imagen." }),
  nombre: z
    .string()
    .min(5, { message: "El nombre debe de tener al menos 5 dígitos" }),
  cliente: z
    .string()
    .min(5, { message: "El nombre del cliente debe tener al menos 5 caracteres" }),
  precioCompra: z.coerce.number(),
  precioVenta: z.coerce.number(),
  stockMin: z.coerce.number(),
  unidad: z.string().min(1, { message: "Por favor selecciona una categoría" }),
});

type StockFormValues = z.infer<typeof formSchema>;

interface StockFormProps {
  initialData: any | null;
  unidad: any;
}

export const StockForm: React.FC<StockFormProps> = ({
  initialData,
  unidad,
}) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = initialData ? "Edit product" : "Alta de artículo";
  const description = initialData ? "Edit a product." : "Agregar artículo nuevo";
  const toastMessage = initialData ? "Product updated." : "Articulo creado.";
  const action = initialData ? "Save changes" : "Crear";

  const defaultValues = initialData
    ? initialData
    : {
      idProducto: 1,
      noParte:"",
      nombre: "",
      cliente: "",
      precioCompra: "",
      precioVenta: "",
      unidad:"",
      stockMin: 0,
      imgUrl: [],
      };

  const form = useForm<StockFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: StockFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      router.refresh();
      router.push(`/dashboard/stock`);
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
      router.push(`/${params.storeId}/stock`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const triggerImgUrlValidation = () => form.trigger("imgUrl");

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
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imágenes Stock</FormLabel>
                <FormControl>
                  <FileUpload
                    onChange={field.onChange}
                    value={field.value}
                    onRemove={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
          <FormField
              control={form.control}
              name="idProducto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id Producto</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} placeholder="B00XXX" {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noParte"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No.Parte</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="B000XXX"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de producto</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Caja ..."
                      {...field}
                    />
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
              name="precioVenta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio de Venta </FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unidad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unidad</FormLabel>
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
                          placeholder="Selecciona tipo unidad"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {unidad.map((unidad) => (
                        <SelectItem key={unidad._id} value={unidad._id}>
                          {unidad.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
 