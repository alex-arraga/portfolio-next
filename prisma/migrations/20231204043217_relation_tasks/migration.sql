/*
  Warnings:

  - Added the required column `user_clerk` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_clerk` to the `TaskCompleted` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `TaskCompleted` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "user_clerk" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TaskCompleted" ADD COLUMN     "user_clerk" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskCompleted" ADD CONSTRAINT "TaskCompleted_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskCompleted" ADD CONSTRAINT "TaskCompleted_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;
