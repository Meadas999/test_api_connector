/*
  Warnings:

  - You are about to drop the column `apiId` on the `webhook_logs` table. All the data in the column will be lost.
  - You are about to drop the column `response` on the `webhook_logs` table. All the data in the column will be lost.
  - Added the required column `endpointId` to the `webhook_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `webhook_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `webhook_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "webhook_logs" DROP COLUMN "apiId",
DROP COLUMN "response",
ADD COLUMN     "endpointId" TEXT NOT NULL,
ADD COLUMN     "method" TEXT NOT NULL,
ADD COLUMN     "responseBody" JSONB,
ADD COLUMN     "responseTime" INTEGER,
ADD COLUMN     "statusCode" INTEGER,
ADD COLUMN     "success" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "timestamp" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "webhook_logs" ADD CONSTRAINT "webhook_logs_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "endpoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;
