/*
  Warnings:

  - You are about to drop the column `empployee_id` on the `store` table. All the data in the column will be lost.
  - Added the required column `gstin` to the `store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `store` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."store" DROP CONSTRAINT "store_empployee_id_fkey";

-- AlterTable
ALTER TABLE "public"."store" DROP COLUMN "empployee_id",
ADD COLUMN     "gstin" TEXT NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."store" ADD CONSTRAINT "store_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
