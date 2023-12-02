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

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskCompleted" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaskCompleted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calculator" (
    "id" SERIAL NOT NULL,
    "expression" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);
