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
  nombre: z
    .string()
    .min(3, { message: "El nombre debe de tener al menos 3 dígitos" }),
  razonSocial: z
    .string()
    .min(6, { message: "La razón social debe de tener al menos 6 dígitos" }),
  direccion: z
    .string()
    .min(5, { message: "La dirección debe tener al menos 5 caracteres" }),
  contacto: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" }),
  email: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" }),
  telefono:z.coerce.number(),
  web: z
    .string()
    .min(8, { message: "El dominio web debe tener al menos 8 caracteres" }),
});

type ReportesFormValues = z.infer<typeof formSchema>;

interface ReportesFormProps {
  initialData: any | null;
}

export const ReportesForm: React.FC<ReportesFormProps> = ({
  initialData,
}) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = initialData ? "Editar reporte" : "Alta de reporte";
  const description = initialData ? "Editar a reportes" : "Agregar reporte nuevo";
  const toastMessage = initialData ? "Reporte actualizado" : "Reporte creado";
  const action = initialData ? "Guardar cambios" : "Crear";

  const defaultValues = initialData
    ? initialData
    : {
        nombre:"",
        razonSocial: "",
        direccion: "",
        contacto: "",
        email: "",
        telefono:"",
        web: "",
      };

  const form = useForm<ReportesFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: ReportesFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      router.refresh();
      router.push(`/dashboard/reportes`);
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
      router.push(`/${params.storeId}/reportes`);
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
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del reporte</FormLabel>
                  <FormControl>
                    <Input type="string" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="razonSocial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Razón Social</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="direccion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contacto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contacto</FormLabel>
                  <FormControl>
                    <Input type="string" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input type="string" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="web"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Web</FormLabel>
                  <FormControl>
                    <Input type="string" disabled={loading} {...field} />
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