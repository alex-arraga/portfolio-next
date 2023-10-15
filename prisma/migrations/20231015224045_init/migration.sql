-- CreateTable
CREATE TABLE "Calculator" (
    "id" SERIAL NOT NULL,
    "expression" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Calculator_pkey" PRIMARY KEY ("id")
);
