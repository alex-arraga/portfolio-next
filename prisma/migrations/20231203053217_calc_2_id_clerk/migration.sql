/*
  Warnings:

  - Added the required column `user_clerk` to the `Calculator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calculator" ADD COLUMN     "user_clerk" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Calculator" ADD CONSTRAINT "Calculator_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;
