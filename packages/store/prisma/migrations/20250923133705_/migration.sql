/*
  Warnings:

  - You are about to alter the column `totalPrice` on the `product_sales` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "public"."product_sales" ALTER COLUMN "totalPrice" SET DATA TYPE INTEGER;
