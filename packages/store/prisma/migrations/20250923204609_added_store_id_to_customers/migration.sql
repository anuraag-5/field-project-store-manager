/*
  Warnings:

  - You are about to drop the `customer_stores` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `store_id` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."customer_stores" DROP CONSTRAINT "customer_stores_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."customer_stores" DROP CONSTRAINT "customer_stores_store_id_fkey";

-- AlterTable
ALTER TABLE "public"."customers" ADD COLUMN     "store_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."customer_stores";

-- AddForeignKey
ALTER TABLE "public"."customers" ADD CONSTRAINT "customers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
