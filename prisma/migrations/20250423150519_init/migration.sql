/*
  Warnings:

  - You are about to drop the column `bedrijfId` on the `api` table. All the data in the column will be lost.
  - You are about to drop the `Bedrijf` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyId` to the `api` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "api" DROP CONSTRAINT "api_bedrijfId_fkey";

-- AlterTable
ALTER TABLE "api" DROP COLUMN "bedrijfId",
ADD COLUMN     "companyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Bedrijf";

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "api" ADD CONSTRAINT "api_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
