import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

interface data {
    name: string,
    razonSocial: string,
    direccion: string,
    contacto: string,
    correo: string,
    telefono: number,
    extension: string,
    web: string
}


export async function POST(req: Request) {
  const body = await req.json();
  try {
  const prisma = new PrismaClient();
  await prisma.proveedor.create({
    data: {
        nombre: body.name,
        razon_social: body.razonSocial,
      direccion: body.direccion,
      contacto: body.contacto,
      correo: body.correo,
      telefono: body.telefono,
      extension: body.extension,
      web: body.web
    }
    });
    return NextResponse.json({ message: "Proveedor creado" }, { status: 201 });
} catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error al crear el proveedor" }, { status: 500 });
}
}