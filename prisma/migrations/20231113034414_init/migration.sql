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
