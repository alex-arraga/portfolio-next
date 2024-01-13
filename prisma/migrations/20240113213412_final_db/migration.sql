-- CreateEnum
CREATE TYPE "Pay_Method" AS ENUM ('none', 'mercado_pago', 'stripe');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "id_clerk" TEXT NOT NULL,
    "username" TEXT,
    "name" TEXT,
    "lastname" TEXT,
    "has_google_account" BOOLEAN NOT NULL DEFAULT false,
    "google_email" TEXT,
    "has_github_account" BOOLEAN NOT NULL DEFAULT false,
    "github_email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "user_clerk" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskCompleted" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "user_clerk" TEXT NOT NULL,

    CONSTRAINT "TaskCompleted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calculator" (
    "id" SERIAL NOT NULL,
    "expression" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "user_clerk" TEXT NOT NULL,

    CONSTRAINT "Calculator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cars" (
    "id" SERIAL NOT NULL,
    "car_id" TEXT NOT NULL,
    "city_mpg" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "combination_mpg" INTEGER NOT NULL,
    "cylinders" INTEGER NOT NULL,
    "displacement" DOUBLE PRECISION NOT NULL,
    "drive" TEXT NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "highway_mpg" INTEGER NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL DEFAULT false,
    "rented" BOOLEAN NOT NULL DEFAULT false,
    "order_id" TEXT,
    "user_id" INTEGER NOT NULL,
    "user_clerk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "payment_id" TEXT,
    "order_id" TEXT NOT NULL,
    "pay_status" TEXT DEFAULT 'pending',
    "pay_status_detail" TEXT,
    "pay_method" "Pay_Method",
    "pay_resource" TEXT,
    "duration_rented" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "installments" INTEGER,
    "fee" DOUBLE PRECISION,
    "net_received_amount" DOUBLE PRECISION,
    "user_id" INTEGER NOT NULL,
    "user_clerk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_clerk_key" ON "User"("id_clerk");

-- CreateIndex
CREATE UNIQUE INDEX "Cars_car_id_key" ON "Cars"("car_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cars_order_id_key" ON "Cars"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_payment_id_key" ON "Order"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_id_key" ON "Order"("order_id");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskCompleted" ADD CONSTRAINT "TaskCompleted_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskCompleted" ADD CONSTRAINT "TaskCompleted_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calculator" ADD CONSTRAINT "Calculator_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calculator" ADD CONSTRAINT "Calculator_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;
