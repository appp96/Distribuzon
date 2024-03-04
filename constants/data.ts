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


export type Almacen = {
  id: number;
  city?: string;
  zipcode: string;
  status: "Active";
  name: string;
  company: string;
  role: string;
  verified: boolean;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

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
    icon: "pizza",
    label: "Almacén",
  },
  {
    title: "Taller",
    href: "/dashboard/taller",
    icon: "pizza",
    label: "Taller",
  },
  {
    title: "Pedidos",
    href: "/dashboard/pedidos",
    icon: "pizza",
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
    icon: "employee",
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