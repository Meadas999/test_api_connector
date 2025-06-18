-- CreateTable
CREATE TABLE "webhook_logs" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "apiId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "requestBody" JSONB,
    "response" JSONB,
    "errorMessage" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "webhook_logs_pkey" PRIMARY KEY ("id")
);
