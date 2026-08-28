-- CreateTable
CREATE TABLE "kpis" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "change" DOUBLE PRECISION NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "kpis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recent_transactions" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "recent_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "tier" TEXT NOT NULL,

    CONSTRAINT "top_customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_channels" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "share" INTEGER NOT NULL,

    CONSTRAINT "sales_channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics_summary" (
    "id" TEXT NOT NULL,
    "todaySalesTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "analytics_summary_pkey" PRIMARY KEY ("id")
);
