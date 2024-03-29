import { NavItem, SidebarNavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Almacen",
    href: "/dashboard/almacen",
    icon: "warehouse",
    label: "Almacén",
    isChidren: true,
    children: [
      {
        title: "Entradas",
        href: "/dashboard/almacen/entradas",
      },
      {
        title: "Salidas",
        href: "/dashboard/almacen/salidas",
      },
      {
        title: "Stock",
        href: "/dashboard/almacen/stock",
      }
    ],
  },
  {
    title: "Compras",
    href: "/dashboard/compras",
    icon: "shoppingcart",
    label: "Almacén",
    isChidren: true,
    children: [
      {
        title: "Artículos",
        href: "/dashboard/compras/articulos",
      },
      {
        title: "Historial",
        href: "/dashboard/compras/historial",
      }
    ],
  },
  {
    title: "Taller",
    href: "/dashboard/taller",
    icon: "factory",
    label: "Taller",
  },
  {
    title: "Proveedores",
    href: "/dashboard/proveedores",
    icon: "notebooktabs",
    label: "Proveedores",
  },
  {
    title: "Reportes",
    href: "/dashboard/reportes",
    icon: "barchartbig",
    label: "Reportes",
  },
  {
    title: "Usuarios",
    href: "/dashboard/adminUsuarios",
    icon: "user",
    label: "Usuarios",
  }
];

export type Almacen = {
  no: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  producto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};

export const almacen: Almacen[] = [
  {
    no: 1,
    codigo: "TM-2024-02752",
    fecha: "11/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    producto: "2x7",
    tipo: "Entrada",
    cantidad: 20000,
    unidad: "Pieza",
  },
  {
    no: 2,
    codigo: "TM-2024-02751",
    fecha: "10/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    producto: "2x7",
    tipo: "Entrada",
    cantidad: 24000,
    unidad: "Pieza",
  },
  {
    no: 3,
    codigo: "TM-2024-02750",
    fecha: "10/01/2024",
    noParte: "11035281",
    cliente: "TYG",
    referencia: "0000",
    producto: "Certificados",
    tipo: "Entrada",
    cantidad: 3600,
    unidad: "Pieza",
  },
  {
    no: 4,
    codigo: "TM-2024-02748",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "0000",
    producto: "Tarjeta de presentación",
    tipo: "Entrada",
    cantidad: 200,
    unidad: "Pieza",
  },
]

export type Entradas = {
  no: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  producto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};

export const entradas: Entradas[] = [
  {
    no: 1,
    codigo: "TM-2024-02752",
    fecha: "11/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    producto: "2x7",
    tipo: "Entrada",
    cantidad: 20000,
    unidad: "Pieza",
  },
  {
    no: 2,
    codigo: "TM-2024-02751",
    fecha: "10/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    producto: "2x7",
    tipo: "Entrada",
    cantidad: 24000,
    unidad: "Pieza",
  },
  {
    no: 3,
    codigo: "TM-2024-02750",
    fecha: "10/01/2024",
    noParte: "11035281",
    cliente: "TYG",
    referencia: "0000",
    producto: "Certificados",
    tipo: "Entrada",
    cantidad: 3600,
    unidad: "Pieza",
  },
  {
    no: 4,
    codigo: "TM-2024-02748",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "0000",
    producto: "Tarjeta de presentación",
    tipo: "Entrada",
    cantidad: 200,
    unidad: "Pieza",
  },
]

export type Salidas = {
  no: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  producto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};

export const salidas: Salidas[] = [
  {
    no: 1,
    codigo: "TM-2024-02756",
    fecha: "12/01/2024",
    noParte: "11008528",
    cliente: "TYG",
    referencia: "F3280",
    producto: "Panel",
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
    producto: "Cover",
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
    producto: "1x15",
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
    producto: "Expediente clínico",
    tipo: "Salida",
    cantidad: 3000,
    unidad: "Pieza",
  },
  {
    no: 5,
    codigo: "TM-2024-02749",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "F3268",
    producto: "Tarjeta de presentación",
    tipo: "Salida",
    cantidad: 200,
    unidad: "Pieza",
  },
  {
    no: 6,
    codigo: "TM-2024-02747",
    fecha: "10/01/2024",
    noParte: "AFOGN1",
    cliente: "BAMEX",
    referencia: "F3267",
    producto: "Base caja caple 24pts",
    tipo: "Salida",
    cantidad: 5000,
    unidad: "Pieza",
  },
]

export const compras: Compras[] = [
  {
    no: 1,
    codigo: "TM-2024-02752",
    fecha: "11/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    producto: "2x7",
    tipo: "Entrada",
    cantidad: 20000,
    unidad: "Pieza",
  },
  {
    no: 2,
    codigo: "TM-2024-02751",
    fecha: "10/01/2024",
    noParte: "11005513",
    cliente: "TYG",
    referencia: "0000",
    producto: "2x7",
    tipo: "Entrada",
    cantidad: 24000,
    unidad: "Pieza",
  },
  {
    no: 3,
    codigo: "TM-2024-02750",
    fecha: "10/01/2024",
    noParte: "11035281",
    cliente: "TYG",
    referencia: "0000",
    producto: "Certificados",
    tipo: "Entrada",
    cantidad: 3600,
    unidad: "Pieza",
  },
  {
    no: 4,
    codigo: "TM-2024-02748",
    fecha: "10/01/2024",
    noParte: "B000089",
    cliente: "MRM",
    referencia: "0000",
    producto: "Tarjeta de presentación",
    tipo: "Entrada",
    cantidad: 200,
    unidad: "Pieza",
  },
]

export type Compras = {
  no: number;
  codigo: string;
  fecha: string;
  noParte: string;
  cliente: string;
  referencia: string;
  producto: string;
  tipo: string;
  cantidad: number;
  unidad: string;
};

export type Articulos = {
  no: number;
  noParte: string;
  descripcion: string;
  categoria: string;
  medida: string;
  precioCompra: number;
  edoStock: string;
  stock: number;
  unidad: string;
};

export const articulos: Articulos[] = [
  {
    no: 1,
    noParte: "A00347",
    descripcion: "Suaje Expediente (HOSPITAL ÁNGELES)",
    categoria: "Suaje",
    medida: " ",
    precioCompra: 0.00,
    edoStock: "Minimo",
    stock: 1,
    unidad: "Pieza",
  },
  {
    no: 2,
    noParte: "A00346",
    descripcion: "HULE BOTADOR ROJO 3/8 x 3/8 x 1 1/4 | Placa 336 c/u",
    categoria: "Materia prima",
    medida: "3/8 x 3/8 x 1 1/4",
    precioCompra: 3360.00,
    edoStock: "Urgente",
    stock: 0,
    unidad: "Pieza",
  },
  {
    no: 3,
    noParte: "A00345",
    descripcion: "KILO DE ROLLO CAPLE 24PTS 101cm (cAJA) | CORTE 71x50",
    categoria: "Materia prima",
    medida: "71x50",
    precioCompra: 4.26,
    edoStock: "Minimo",
    stock: 0,
    unidad: "Pieza",
  },
  {
    no: 4,
    noParte: "A00344",
    descripcion: "KILO DE ROLLO CAPLE 24PTS 101cm (cAJA) | CORTE 50x71",
    categoria: "Materia prima",
    medida: "50x71",
    precioCompra: 4.25,
    edoStock: "Minimo",
    stock: 0,
    unidad: "Pieza",
  },
  {
    no: 6,
    noParte: "A00343",
    descripcion: "Caja autoarmable 18x12x4.5cm (VENNER)",
    categoria: "Suaje",
    medida: "45x45 cm",
    precioCompra: 2405.00,
    edoStock: "Minimo",
    stock: 1,
    unidad: "Pieza",
  },
  {
    no: 6,
    noParte: "A00342",
    descripcion: "Suaje Tira 1 al 18",
    categoria: "Suaje",
    medida: "40x41.6",
    precioCompra: 2155.00,
    edoStock: "Minimo",
    stock: 1,
    unidad: "Pieza",
  },
  {
    no: 7,
    noParte: "A00341",
    descripcion: "Suaje Alma Terry hombre",
    categoria: "Suaje",
    medida: "45x40",
    precioCompra: 1074.00,
    edoStock: "Minimo",
    stock: 1,
    unidad: "Pieza",
  },
  {
    no: 8,
    noParte: "A00340",
    descripcion: "Suaje Tira Terry camisa hombre",
    categoria: "Suaje",
    medida: "31.25x45",
    precioCompra: 1970.00,
    edoStock: "Minimo",
    stock: 1,
    unidad: "Pieza",
  },
  {
    no: 9,
    noParte: "A00339",
    descripcion: "KILO DE ROLLO CAPLE 24PTS 101cm (cAJA) | CORTE 50x71",
    categoria: "Materia prima",
    medida: "71x50",
    precioCompra: 3.73,
    edoStock: "Minimo",
    stock: 0,
    unidad: "Pieza",
  },
  {
    no: 10,
    noParte: "A00338",
    descripcion: "MARCADOR P/PINTARRON P/C MARKS",
    categoria: "Materia prima",
    medida: "4 colores",
    precioCompra: 70.70,
    edoStock: "Minimo",
    stock: 1,
    unidad: "Paquete",
  },
]

export type Historial = {
  no: number;
  codTransaccion: string;
  factura: string;
  fecha: string;
  noParte: string;
  articulo: string;
  proveedor: string;
  tPago: string;
  precioCompra: number;
  cantidad: number;
  unidad: string;
};

export const historial: Historial[] = [
  {
    no: 1,
    codTransaccion: "CO-2024-00988",
    factura: "05153AC",
    fecha: "2023-11-29",
    noParte: "A00319",
    articulo: "BOND BLANCO OFFSET-EB",
    proveedor: "ADOSA",
    tPago: "Efectivo",
    precioCompra: 0.13,
    cantidad: 1600,
    unidad: "Pieza",
  },
  {
    no: 2,
    codTransaccion: "CO-2024-00987",
    factura: "2031574",
    fecha: "2024-01-10",
    noParte: "A00276",
    articulo: "Emplaye (Película para paletizar)",
    proveedor: "ADOSA",
    tPago: "Transferncia",
    precioCompra: 111.60,
    cantidad: 12,
    unidad: "Pieza",
  },
  {
    no: 3,
    codTransaccion: "CO-2024-00986",
    factura: "2031574",
    fecha: "2024-01-10",
    noParte: "44121503",
    articulo: "Sobre Coin c/50",
    proveedor: "ADOSA",
    tPago: "Transferencia",
    precioCompra: 28.49,
    cantidad: 2,
    unidad: "Caja",
  },
  {
    no: 4,
    codTransaccion: "CO-2024-00985",
    factura: "2031574",
    fecha: "2024-01-10",
    noParte: "085410",
    articulo: "Caja empaque cartón tamaño oficio",
    proveedor: "ADOSA",
    tPago: "Transferencia",
    precioCompra: 15.38,
    cantidad: 75,
    unidad: "Pieza",
  },
  {
    no: 5,
    codTransaccion: "CO-2024-00984",
    factura: "0000",
    fecha: "2024-01-10",
    noParte: "A00136",
    articulo: "Etiqueta distribuzon 1x15",
    proveedor: "DISTRIBUZON",
    tPago: "Efectivo",
    precioCompra: 0.67,
    cantidad: 3,
    unidad: "Pieza",
  },
  {
    no: 6,
    codTransaccion: "CO-2024-00983",
    factura: "kl 790632",
    fecha: "2024-01-04",
    noParte: "A00182",
    articulo: "SERVIBOLSA CHICA 15lt",
    proveedor: "HEB",
    tPago: "Efectivo",
    precioCompra: 28.02,
    cantidad: 5,
    unidad: "Pieza",
  },
  {
    no: 7,
    codTransaccion: "CO-2024-00982",
    factura: "0000",
    fecha: "2024-01-08",
    noParte: "A00347",
    articulo: "Suaje expediente (HOSPITAL ÁNGELES)",
    proveedor: "SUAJES MADRID",
    tPago: "Transferencia",
    precioCompra: 800.00,
    cantidad: 1,
    unidad: "Pieza",
  },
  {
    no: 9,
    codTransaccion: "CO-2024-00981",
    factura: "0000",
    fecha: "2024-01-05",
    noParte: "A00114",
    articulo: "Etiqueta distribuzon blanca",
    proveedor: "DISTRIBUZON",
    tPago: "Efectivo",
    precioCompra: 0.67,
    cantidad: 8,
    unidad: "Pieza",
  },
  {
    no: 10,
    codTransaccion: "CO-2024-00980",
    factura: "2030450",
    fecha: "2024-01-02",
    noParte: "A00247",
    articulo: "Papel autocopia (CF) (DONADOR BLANCO)",
    proveedor: "ADOSA",
    tPago: "Efectivo",
    precioCompra: 0.34,
    cantidad: 1000,
    unidad: "Pieza",
  },
]

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

export type Proveedores = {
  no: number;
  nombre: string;
  razonSocial: string;
  direccion: string;
  contacto: string;
  telefono: number;
};

export const proveedores: Proveedores[] = [
  {
    no: 1,
    nombre: "EMPAQSA",
    razonSocial: "RICARDO MANUEL ROJAS GONZALEZ",
    direccion: "CARPINTEROS 615 FAMA IV SANTA CATARINA",
    contacto: "RICARDO MANUEL ROJAS rrojas@empaqsa.com.mx",
    telefono: 0,
  },
  {
    no: 2,
    nombre: "HEB",
    razonSocial: "SUPERMERCADOS INTERNACIONALES HEB",
    direccion: "HIDALGO 2405 COL. OBISPADO, MTY, NL",
    contacto: "",
    telefono: 0,
  },
  {
    no: 3,
    nombre: "Marcos Económicos",
    razonSocial: "Alma Guadalupe Bello Durán",
    direccion: "M.M.DE LLANO PTE 1341 COL.CENTRO",
    contacto: "RICARDO cuadrosmonterrey@gmail.com",
    telefono: 8113225090,
  },
  {
    no: 4,
    nombre: "COMERCIALIZADORA GUEM SA de CV",
    razonSocial: "COMERCIALIZADORA GUEM SA de CV",
    direccion: "MORONES PRIETO 1500 COL. NUEVAS COLONIAS",
    contacto: "termosmayoreomty@gmail.com",
    telefono: 0,
  },
  {
    no: 5,
    nombre: "BIRLOS Y TORNILLOS SA DE CV",
    razonSocial: "BIRLOS Y TORNILLOS SA DE CV",
    direccion: "GENERAL TREVIÑO 1837 OTE MTY",
    contacto: "Z ventas@bytnsa.com",
    telefono: 8183420742,
  },
  {
    no: 6,
    nombre: "NISSAN TOREO",
    razonSocial: "AUTOMOTRIZ TOREO SA DE CV",
    direccion: "AV. ALFONSO REYES 2310 COL. BELLA VISTA",
    contacto: "KAREN TRVIÑO karen.treviño@grupotoreo.com",
    telefono: 8180936227,
  },
  {
    no: 7,
    nombre: "STREAM XEROX",
    razonSocial: "STREAM DOCUMENT SA DE CV",
    direccion: "",
    contacto: "Alejandra Hernández alejadnra@streamdocument.com",
    telefono: 8119909905,
  },
  {
    no: 8,
    nombre: "ALCAZAR",
    razonSocial: "RUBI ALEXANDRA MARIANA MORIN ALCAZAR",
    direccion: "",
    contacto: "",
    telefono: 0,
  },
  {
    no: 9,
    nombre: "COMERCIALIZADORA OCHO ONCE",
    razonSocial: "COMERCIALIZADORA OCHO ONCE",
    direccion: "ARRAMBERRI PTE 1346 COL. CENTRO",
    contacto: "",
    telefono: 0,
  },
  {
    no: 10,
    nombre: "BEISA 2",
    razonSocial: "BUJES Y ESCOBILLAS INDUSTRIALES SA DE CV",
    direccion: "",
    contacto: "",
    telefono: 0,
  },
]

export type Reportes = {
  no: number;
  nombre: string;
  razonSocial: string;
  direccion: string;
  contacto: string;
  telefono: number;
};

export const reportes: Reportes[] = [
  {
    no: 1,
    nombre: "EMPAQSA",
    razonSocial: "RICARDO MANUEL ROJAS GONZALEZ",
    direccion: "CARPINTEROS 615 FAMA IV SANTA CATARINA",
    contacto: "RICARDO MANUEL ROJAS rrojas@empaqsa.com.mx",
    telefono: 0,
  },
  {
    no: 2,
    nombre: "HEB",
    razonSocial: "SUPERMERCADOS INTERNACIONALES HEB",
    direccion: "HIDALGO 2405 COL. OBISPADO, MTY, NL",
    contacto: "",
    telefono: 0,
  },
  {
    no: 3,
    nombre: "Marcos Económicos",
    razonSocial: "Alma Guadalupe Bello Durán",
    direccion: "M.M.DE LLANO PTE 1341 COL.CENTRO",
    contacto: "RICARDO cuadrosmonterrey@gmail.com",
    telefono: 8113225090,
  },
  {
    no: 4,
    nombre: "COMERCIALIZADORA GUEM SA de CV",
    razonSocial: "COMERCIALIZADORA GUEM SA de CV",
    direccion: "MORONES PRIETO 1500 COL. NUEVAS COLONIAS",
    contacto: "termosmayoreomty@gmail.com",
    telefono: 0,
  },
  {
    no: 5,
    nombre: "BIRLOS Y TORNILLOS SA DE CV",
    razonSocial: "BIRLOS Y TORNILLOS SA DE CV",
    direccion: "GENERAL TREVIÑO 1837 OTE MTY",
    contacto: "Z ventas@bytnsa.com",
    telefono: 8183420742,
  },
  {
    no: 6,
    nombre: "NISSAN TOREO",
    razonSocial: "AUTOMOTRIZ TOREO SA DE CV",
    direccion: "AV. ALFONSO REYES 2310 COL. BELLA VISTA",
    contacto: "KAREN TRVIÑO karen.treviño@grupotoreo.com",
    telefono: 8180936227,
  },
  {
    no: 7,
    nombre: "STREAM XEROX",
    razonSocial: "STREAM DOCUMENT SA DE CV",
    direccion: "",
    contacto: "Alejandra Hernández alejadnra@streamdocument.com",
    telefono: 8119909905,
  },
  {
    no: 8,
    nombre: "ALCAZAR",
    razonSocial: "RUBI ALEXANDRA MARIANA MORIN ALCAZAR",
    direccion: "",
    contacto: "",
    telefono: 0,
  },
  {
    no: 9,
    nombre: "COMERCIALIZADORA OCHO ONCE",
    razonSocial: "COMERCIALIZADORA OCHO ONCE",
    direccion: "ARRAMBERRI PTE 1346 COL. CENTRO",
    contacto: "",
    telefono: 0,
  },
  {
    no: 10,
    nombre: "BEISA 2",
    razonSocial: "BUJES Y ESCOBILLAS INDUSTRIALES SA DE CV",
    direccion: "",
    contacto: "",
    telefono: 0,
  },
]

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