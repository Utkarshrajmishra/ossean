/*
  Warnings:

  - You are about to drop the column `image` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Account" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "image" TEXT;
