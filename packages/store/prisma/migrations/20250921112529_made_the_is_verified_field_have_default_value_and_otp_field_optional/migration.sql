-- AlterTable
ALTER TABLE "public"."stores" ALTER COLUMN "isVerified" SET DEFAULT false,
ALTER COLUMN "otp" DROP NOT NULL;
