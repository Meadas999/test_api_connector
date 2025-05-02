-- CreateTable
CREATE TABLE "Bedrijf" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Bedrijf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bedrijfId" TEXT NOT NULL,
    "baseurl" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "api_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endpoint" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apiId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "endpoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mapping" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "endpointId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,

    CONSTRAINT "mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mapconfiguration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mappingId" TEXT NOT NULL,
    "sourceField" TEXT NOT NULL,
    "targetField" TEXT NOT NULL,

    CONSTRAINT "mapconfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apiAuth" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apiId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "clientId" TEXT,
    "clientSecret" TEXT,
    "tokenUrl" TEXT,
    "authUrl" TEXT,
    "scopes" TEXT,
    "redirectUrl" TEXT,
    "description" TEXT,

    CONSTRAINT "apiAuth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "endpoint_apiId_key" ON "endpoint"("apiId");

-- CreateIndex
CREATE UNIQUE INDEX "apiAuth_apiId_key" ON "apiAuth"("apiId");

-- AddForeignKey
ALTER TABLE "api" ADD CONSTRAINT "api_bedrijfId_fkey" FOREIGN KEY ("bedrijfId") REFERENCES "Bedrijf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endpoint" ADD CONSTRAINT "endpoint_apiId_fkey" FOREIGN KEY ("apiId") REFERENCES "api"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mapping" ADD CONSTRAINT "mapping_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "endpoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mapconfiguration" ADD CONSTRAINT "mapconfiguration_mappingId_fkey" FOREIGN KEY ("mappingId") REFERENCES "mapping"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apiAuth" ADD CONSTRAINT "apiAuth_apiId_fkey" FOREIGN KEY ("apiId") REFERENCES "api"("id") ON DELETE CASCADE ON UPDATE CASCADE;
