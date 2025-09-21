/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `employees` table. All the data in the column will be lost.
  - Added the required column `isOwner` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."employees" DROP COLUMN "isAdmin",
ADD COLUMN     "isOwner" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "public"."store" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "empployee_id" TEXT NOT NULL,

    CONSTRAINT "store_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."store" ADD CONSTRAINT "store_empployee_id_fkey" FOREIGN KEY ("empployee_id") REFERENCES "public"."employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
