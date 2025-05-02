/*
  Warnings:

  - You are about to drop the column `sourceId` on the `mapping` table. All the data in the column will be lost.
  - You are about to drop the column `targetId` on the `mapping` table. All the data in the column will be lost.
  - You are about to drop the `mapconfiguration` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[targetendpointId]` on the table `endpoint` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mappingId` to the `mapping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceField` to the `mapping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetField` to the `mapping` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "mapconfiguration" DROP CONSTRAINT "mapconfiguration_mappingId_fkey";

-- AlterTable
ALTER TABLE "endpoint" ADD COLUMN     "targetendpointId" TEXT;

-- AlterTable
ALTER TABLE "mapping" DROP COLUMN "sourceId",
DROP COLUMN "targetId",
ADD COLUMN     "mappingId" TEXT NOT NULL,
ADD COLUMN     "sourceField" TEXT NOT NULL,
ADD COLUMN     "targetField" TEXT NOT NULL;

-- DropTable
DROP TABLE "mapconfiguration";

-- CreateIndex
CREATE UNIQUE INDEX "endpoint_targetendpointId_key" ON "endpoint"("targetendpointId");

-- AddForeignKey
ALTER TABLE "endpoint" ADD CONSTRAINT "endpoint_targetendpointId_fkey" FOREIGN KEY ("targetendpointId") REFERENCES "endpoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;
