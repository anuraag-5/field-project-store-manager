-- CreateTable
CREATE TABLE "public"."customer_stores" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,

    CONSTRAINT "customer_stores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."customer_stores" ADD CONSTRAINT "customer_stores_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."customer_stores" ADD CONSTRAINT "customer_stores_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
