import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Taller = {
  id: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  prducto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};
export const taller: Taller[] = [
  {
    id: 1,
    codigo: "TM-2024-02756",
    fecha: "12/01/2024",
    noParte: "11008528",
    cliente: "TYG",
    referencia: "F3280",
    prducto: "Panel",
    tipo: "Salida",
    cantidad: 6000,
    unidad: "Pieza",
  },
  {
    id: 2,
    codigo: "TM-2024-02755",
    fecha: "12/01/2024",
    noParte: "11215432",
    cliente: "TYG",
    referencia: "F3272",
    prducto: "Cover",
    tipo: "Salida",
    cantidad: 32000,
    unidad: "Pieza",
  },
  {
    id: 3,
    codigo: "TM-2024-02754",
    fecha: "12/01/2024",
    noParte: "11029640",
    cliente: "TYG",
    referencia: "F3271",
    prducto: "1x15",
    tipo: "Salida",
    cantidad: 10000,
    unidad: "Pieza",
  },
  {
    id: 4,
    codigo: "TM-2024-02753",
    fecha: "11/01/2024",
    noParte: "B00318",
    cliente: "HOSPITAL ÁNGELES TORREÓN",
    referencia: "F3269",
    prducto: "Expediente clínico",
    tipo: "Salida",
    cantidad: 3000,
    unidad: "Pieza",
  },
  {
    id: 5,
    codigo: "TM-2024-02752",
    fecha: "11/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    prducto: "2x7",
    tipo: "Entrada",
    cantidad: 20000,
    unidad: "Pieza",
  },
  {
    id: 6,
    codigo: "TM-2024-02751",
    fecha: "10/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    prducto: "2x7",
    tipo: "Entrada",
    cantidad: 24000,
    unidad: "Pieza",
  },
  {
    id: 7,
    codigo: "TM-2024-02750",
    fecha: "10/01/2024",
    noParte: "11035281",
    cliente: "TYG",
    referencia: "0000",
    prducto: "Certificados",
    tipo: "Entrada",
    cantidad: 3600,
    unidad: "Pieza",
  },
  {
    id: 8,
    codigo: "TM-2024-02749",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "F3268",
    prducto: "Tarjeta de presentación",
    tipo: "Salida",
    cantidad: 200,
    unidad: "Pieza",
  },
  {
    id: 9,
    codigo: "TM-2024-02748",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "0000",
    prducto: "Tarjeta de presentación",
    tipo: "Entrada",
    cantidad: 200,
    unidad: "Pieza",
  },
  {
    id: 10,
    codigo: "TM-2024-02747",
    fecha: "10/01/2024",
    noParte: "AFOGN1",
    cliente: "BAMEX",
    referencia: "F3267",
    prducto: "Base caja caple 24pts",
    tipo: "Salida",
    cantidad: 5000,
    unidad: "Pieza",
  },
];

export type Stock = {
  no: number;
  noParte: string;
  nombre: string;
  cliente: string;
  precioCompra: number;
  precioVenta: number;
  stock: number;
  unidad: string;
  edoStock: string;
};

export const stock: Stock[] = [
  {
    no: 1,
    noParte: "B00318",
    nombre: "Expediente clínico",
    cliente: "HOSPITAL ÁNGELES TORREÓN",
    precioCompra: 0.00,
    precioVenta: 0.00,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 2,
    noParte: "B00317",
    nombre: "Imán para carro 40x15 cm",
    cliente: "HEISA",
    precioCompra: 57.50,
    precioVenta: 87.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 3,
    noParte: "B00316",
    nombre: "Etiqueta de seguridad 1.5x7 cm",
    cliente: "VILLA DORADA",
    precioCompra: 0.00,
    precioVenta: 1.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 4,
    noParte: "B00315",
    nombre: "Caja autoarmable 18x12x4.5 cm",
    cliente: "DISTRIBUZON",
    precioCompra: 0.00,
    precioVenta: 0.00,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 5,
    noParte: "B00314",
    nombre: "Tira 16-18",
    cliente: "CONFECCIONES DANY",
    precioCompra:  0.00,
    precioVenta: 0.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 6,
    noParte: "B00313",
    nombre: "Tira 14",
    cliente: "CONFECCIONES DANY",
    precioCompra:  0.00,
    precioVenta: 0.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 7,
    noParte: "B00312",
    nombre: "Tira 10-12",
    cliente: "CONFECCIONES DANY",
    precioCompra:  0.00,
    precioVenta: 0.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 8,
    noParte: "B00311",
    nombre: "Tira 6-8",
    cliente: "CONFECCIONES DANY",
    precioCompra:  0.00,
    precioVenta: 0.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 9,
    noParte: "B00310",
    nombre: "Tira 4-5",
    cliente: "CONFECCIONES DANY",
    precioCompra:  0.00,
    precioVenta: 0.50,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  {
    no: 10,
    noParte: "B00309",
    nombre: "Caja 18x12x4.5 cm 1 tinta",
    cliente: "VENNER",
    precioCompra: 0.00,
    precioVenta: 12.35,
    stock: 0,
    unidad: "pieza",
    edoStock: "Mínimo",
  },
  
]

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Empleados",
    href: "/dashboard/employee",
    icon: "pizza",
    label: "Empleados",
  },
  {
    title: "Almacén",
    href: "/dashboard/almacen",
    icon: "warehouse",
    label: "Almacén",
  },
  {
    title: "Stock",
    href: "/dashboard/stock",
    icon: "packagesearch",
    label: "Stock",
  },
  {
    title: "Taller",
    href: "/dashboard/taller",
    icon: "factory",
    label: "Taller",
  },
  {
    title: "Pedidos",
    href: "/dashboard/pedidos",
    icon: "truck",
    label: "Pedidos",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Proveedores",
    href: "/dashboard/proveedores",
    icon: "user",
    label: "Proveedores",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Logout",
    href: "/",
    icon: "login",
    label: "logout",
  },
];

export type Empleados = {
  id: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  prducto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};

export const empleados: Empleados[] = [
  {
    id: 1,
    codigo: "TM-2024-02756",
    fecha: "12/01/2024",
    noParte: "11008528",
    cliente: "TYG",
    referencia: "F3280",
    prducto: "Panel",
    tipo: "Salida",
    cantidad: 6000,
    unidad: "Pieza",
  },
]

export type Almacen = {
  no: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  prducto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};

export const almacen: Almacen[] = [
  {
    no: 1,
    codigo: "TM-2024-02756",
    fecha: "12/01/2024",
    noParte: "11008528",
    cliente: "TYG",
    referencia: "F3280",
    prducto: "Panel",
    tipo: "Salida",
    cantidad: 6000,
    unidad: "Pieza",
  },
  {
    no: 2,
    codigo: "TM-2024-02755",
    fecha: "12/01/2024",
    noParte: "11215432",
    cliente: "TYG",
    referencia: "F3272",
    prducto: "Cover",
    tipo: "Salida",
    cantidad: 32000,
    unidad: "Pieza",
  },
  {
    no: 3,
    codigo: "TM-2024-02754",
    fecha: "12/01/2024",
    noParte: "11029640",
    cliente: "TYG",
    referencia: "F3271",
    prducto: "1x15",
    tipo: "Salida",
    cantidad: 10000,
    unidad: "Pieza",
  },
  {
    no: 4,
    codigo: "TM-2024-02753",
    fecha: "11/01/2024",
    noParte: "B00318",
    cliente: "HOSPITAL ÁNGELES TORREÓN",
    referencia: "F3269",
    prducto: "Expediente clínico",
    tipo: "Salida",
    cantidad: 3000,
    unidad: "Pieza",
  },
  {
    no: 5,
    codigo: "TM-2024-02752",
    fecha: "11/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    prducto: "2x7",
    tipo: "Entrada",
    cantidad: 20000,
    unidad: "Pieza",
  },
  {
    no: 6,
    codigo: "TM-2024-02751",
    fecha: "10/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    prducto: "2x7",
    tipo: "Entrada",
    cantidad: 24000,
    unidad: "Pieza",
  },
  {
    no: 7,
    codigo: "TM-2024-02750",
    fecha: "10/01/2024",
    noParte: "11035281",
    cliente: "TYG",
    referencia: "0000",
    prducto: "Certificados",
    tipo: "Entrada",
    cantidad: 3600,
    unidad: "Pieza",
  },
  {
    no: 8,
    codigo: "TM-2024-02749",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "F3268",
    prducto: "Tarjeta de presentación",
    tipo: "Salida",
    cantidad: 200,
    unidad: "Pieza",
  },
  {
    no: 9,
    codigo: "TM-2024-02748",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "0000",
    prducto: "Tarjeta de presentación",
    tipo: "Entrada",
    cantidad: 200,
    unidad: "Pieza",
  },
  {
    no: 10,
    codigo: "TM-2024-02747",
    fecha: "10/01/2024",
    noParte: "AFOGN1",
    cliente: "BAMEX",
    referencia: "F3267",
    prducto: "Base caja caple 24pts",
    tipo: "Salida",
    cantidad: 5000,
    unidad: "Pieza",
  },
]