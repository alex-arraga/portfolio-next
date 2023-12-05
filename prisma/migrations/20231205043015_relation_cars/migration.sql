/*
  Warnings:

  - Added the required column `user_clerk` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cars" ADD COLUMN     "user_clerk" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;
