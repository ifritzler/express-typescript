/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumnail` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdAt",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "thumnail" TEXT NOT NULL;
