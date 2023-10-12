-- CreateTable
CREATE TABLE "TaskCompleted" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaskCompleted_pkey" PRIMARY KEY ("id")
);
