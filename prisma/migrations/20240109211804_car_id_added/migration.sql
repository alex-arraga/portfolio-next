/*
  Warnings:

  - A unique constraint covering the columns `[car_id]` on the table `Cars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `car_id` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cars" ADD COLUMN     "car_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cars_car_id_key" ON "Cars"("car_id");
