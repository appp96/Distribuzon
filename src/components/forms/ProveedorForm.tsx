"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SetStateAction, useState } from "react"
import { Proveedor } from "@prisma/client"
import { useRouter } from "next/navigation"

export function ProveedorForm(){
    const router = useRouter()
    const [name, setName] = useState("")
    const [razonSocial, setRazonSocial] = useState("")
    const [direccion, setDireccion] = useState("")
    const [contacto, setContacto] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState<number>()
    const [extension, setExtension] = useState("")
    const [web, setWeb] = useState("")

    async function createProveedor(){
        // fetch to api to create proveedor
        const response = await fetch("/api/proveedor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                razonSocial,
                direccion,
                contacto,
                correo,
                telefono,
                extension,
                web
            })
        })
        if(response.status === 200) {
            console.log("Proveedor creado")
        }
        router.push(`/dashboard/proveedores`)
    }

    return(
        <div className="overflow-y-auto h-auto" >
            <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input type="text" id="nombre" name="nombre" onChange={(e: { target: { value: SetStateAction<string> } }) => setName(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="razon-social">Razón social</Label>
                <Input type="text" id="razon-social" name="razon-social" onChange={(e: { target: { value: SetStateAction<string> } }) => setRazonSocial(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Input type="text" id="direccion" name="direccion" onChange={(e: { target: { value: SetStateAction<string> } }) => setDireccion(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="contacto">Contacto</Label>
                <Input type="text" id="contacto" name="contacto" onChange={(e: { target: { value: SetStateAction<string> } }) => setContacto(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="correo">Correo</Label>
                <Input type="email" id="correo" name="correo" onChange={(e: { target: { value: SetStateAction<string> } }) => setCorreo(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input type="tel" id="telefono" name="telefono" onChange={(e: { target: { value: string } }) => setTelefono(parseInt(e.target.value))}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="extension">Extensión</Label>
                <Input type="text" id="extension" name="extension" onChange={(e: { target: { value: SetStateAction<string> } }) => setExtension(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="web">Web</Label>
                <Input type="text" id="web" name="web" onChange={(e: { target: { value: SetStateAction<string> } }) => setWeb(e.target.value)}/>
            </div>
        <button onClick={createProveedor}>Agregar</button>
    </div>
    )
}
