/*
  Warnings:

  - Added the required column `totalPrice` to the `product_sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."product_sales" ADD COLUMN     "totalPrice" BIGINT NOT NULL;
