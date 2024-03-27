-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articulo" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "num_articulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "precio_ref" INTEGER NOT NULL,
    "costo_unitario" INTEGER NOT NULL,
    "unidad" TEXT NOT NULL,
    "medidas" TEXT NOT NULL,
    "stock_min" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "usuario_creado" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,
    "usuario_actualizado" TEXT NOT NULL,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Articulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "razon_social" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,
    "extension" TEXT NOT NULL,
    "web" TEXT NOT NULL,
    "usuario_creado" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,
    "usuario_actualizado" TEXT NOT NULL,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidad" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Unidad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
