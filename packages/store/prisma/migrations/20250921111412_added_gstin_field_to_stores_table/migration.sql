/*
  Warnings:

  - You are about to drop the `store` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."store" DROP CONSTRAINT "store_owner_id_fkey";

-- DropTable
DROP TABLE "public"."store";

-- CreateTable
CREATE TABLE "public"."stores" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gstin" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,
    "otp" JSONB NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."stores" ADD CONSTRAINT "stores_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
