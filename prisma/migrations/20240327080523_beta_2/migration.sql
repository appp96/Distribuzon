-- AlterTable
ALTER TABLE "Articulo" ALTER COLUMN "usuario_creado" DROP NOT NULL,
ALTER COLUMN "fecha_creacion" DROP NOT NULL,
ALTER COLUMN "usuario_actualizado" DROP NOT NULL,
ALTER COLUMN "fecha_actualizacion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Proveedor" ALTER COLUMN "usuario_creado" DROP NOT NULL,
ALTER COLUMN "fecha_creacion" DROP NOT NULL,
ALTER COLUMN "usuario_actualizado" DROP NOT NULL,
ALTER COLUMN "fecha_actualizacion" DROP NOT NULL;
