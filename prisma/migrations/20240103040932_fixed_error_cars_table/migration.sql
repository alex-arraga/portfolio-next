-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_order_id_fkey";

-- AlterTable
ALTER TABLE "Cars" ALTER COLUMN "liked" SET DEFAULT false,
ALTER COLUMN "rented" SET DEFAULT false,
ALTER COLUMN "order_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;
