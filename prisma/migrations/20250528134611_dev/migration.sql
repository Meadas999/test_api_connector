-- CreateTable
CREATE TABLE "apiLog" (
    "id" TEXT NOT NULL,
    "endpointId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "requestBody" JSONB,
    "responseBody" JSONB,
    "errorMessage" TEXT,
    "statusCode" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "apiLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "apiLog" ADD CONSTRAINT "apiLog_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "endpoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;
