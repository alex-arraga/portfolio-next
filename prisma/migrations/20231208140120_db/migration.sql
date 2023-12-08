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
    "rented" BOOLEAN NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "pay_method" TEXT,
    "duration_rented" TEXT,
    "user_id" INTEGER NOT NULL,
    "user_clerk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_clerk_key" ON "User"("id_clerk");

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
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_user_clerk_fkey" FOREIGN KEY ("user_clerk") REFERENCES "User"("id_clerk") ON DELETE RESTRICT ON UPDATE CASCADE;
