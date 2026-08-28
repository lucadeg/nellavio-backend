import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

import { analyticsSummaryData } from "../src/data/analytics/analyticsSummary.js";
import { assetPerformanceData } from "../src/data/analytics/assetPerformance.js";
import { kpisData } from "../src/data/analytics/kpis.js";
import { marketMetricsData } from "../src/data/analytics/marketMetrics.js";
import { recentTransactionsData } from "../src/data/analytics/recentTransactions.js";
import { revenueTrendsData } from "../src/data/analytics/revenueTrends.js";
import { salesChannelsData } from "../src/data/analytics/salesChannels.js";
import { todaySalesData } from "../src/data/analytics/todaySales.js";
import { topCustomersData } from "../src/data/analytics/topCustomers.js";
import { yearOverviewData } from "../src/data/analytics/yearOverview.js";
import { customersData } from "../src/data/customers.js";
import { eventsData } from "../src/data/events.js";
import { bestSellingProductsData } from "../src/data/homepage/bestSellingProducts.js";
import { customerSatisfactionData } from "../src/data/homepage/customerSatisfaction.js";
import { fourSmallCardsData } from "../src/data/homepage/fourSmallCards.js";
import { revenueOverTimeData } from "../src/data/homepage/revenueOverTime.js";
import { revenuePerCountryData } from "../src/data/homepage/revenuePerCountry.js";
import { threeSmallCardsData } from "../src/data/homepage/threeSmallCards.js";
import { weeklyActivitiesData } from "../src/data/homepage/weeklyActivities.js";
import { weeklyPerformanceData } from "../src/data/homepage/weeklyPerformance.js";
import { notificationsData } from "../src/data/notifications.js";
import { ordersData } from "../src/data/orders.js";
import { productsData } from "../src/data/products.js";
import { PrismaClient } from "../src/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const main = async () => {
  await prisma.$transaction(async (tx) => {
    // Clear existing data first
    await tx.asset.deleteMany();
    await tx.bestSellingProduct.deleteMany();
    await tx.customer.deleteMany();
    await tx.customerSatisfaction.deleteMany();
    await tx.event.deleteMany();
    await tx.threeSmallCard.deleteMany();
    await tx.fourSmallCard.deleteMany();
    await tx.revenueTrend.deleteMany();
    await tx.order.deleteMany();
    await tx.product.deleteMany();
    await tx.revenuePerCountry.deleteMany();
    await tx.revenueOverTime.deleteMany();
    await tx.todaySales.deleteMany();
    await tx.yearOverview.deleteMany();
    await tx.marketMetrics.deleteMany();
    await tx.kpi.deleteMany();
    await tx.recentTransaction.deleteMany();
    await tx.topCustomer.deleteMany();
    await tx.salesChannel.deleteMany();
    await tx.analyticsSummary.deleteMany();
    await tx.weeklyPerformance.deleteMany();
    await tx.weeklyActivity.deleteMany();
    await tx.notification.deleteMany();

    // Seed for Assets
    for (const item of assetPerformanceData) {
      await tx.asset.create({ data: item });
    }

    // Seed for Best Selling Products
    for (const item of bestSellingProductsData) {
      await tx.bestSellingProduct.create({ data: item });
    }

    // Seed for Customers
    for (const item of customersData) {
      await tx.customer.create({ data: item });
    }

    // Seed for Customer Satisfaction
    for (const item of customerSatisfactionData) {
      await tx.customerSatisfaction.create({ data: item });
    }

    // Seed for Events
    for (const item of eventsData) {
      await tx.event.create({ data: item });
    }

    // Seed for Three Small Cards (3 cards for Homepage V1)
    for (const item of threeSmallCardsData) {
      await tx.threeSmallCard.create({ data: item });
    }

    // Seed for Four Small Cards (4 cards for Homepage V2)
    for (const item of fourSmallCardsData) {
      await tx.fourSmallCard.create({ data: item });
    }

    // Seed for Revenue Trends
    for (const item of revenueTrendsData) {
      await tx.revenueTrend.create({ data: item });
    }

    // Seed for Orders
    for (const item of ordersData) {
      await tx.order.create({ data: item });
    }

    // Seed for Products
    for (const item of productsData) {
      await tx.product.create({ data: item });
    }

    // Seed for Revenue Per Country
    for (const item of revenuePerCountryData) {
      await tx.revenuePerCountry.create({ data: item });
    }

    // Seed for Revenue Over Time
    for (const item of revenueOverTimeData) {
      await tx.revenueOverTime.create({ data: item });
    }

    // Seed for Today Sales
    for (const item of todaySalesData) {
      await tx.todaySales.create({ data: item });
    }

    // Seed for Year Overview
    for (const item of yearOverviewData) {
      await tx.yearOverview.create({ data: item });
    }

    // Seed for Market Metrics
    for (const item of marketMetricsData) {
      await tx.marketMetrics.create({ data: item });
    }

    // Seed for KPIs
    for (const item of kpisData) {
      await tx.kpi.create({ data: item });
    }

    // Seed for Recent Transactions
    for (const item of recentTransactionsData) {
      await tx.recentTransaction.create({ data: item });
    }

    // Seed for Top Customers
    for (const item of topCustomersData) {
      await tx.topCustomer.create({ data: item });
    }

    // Seed for Sales Channels
    for (const item of salesChannelsData) {
      await tx.salesChannel.create({ data: item });
    }

    // Seed for Analytics Summary (single row)
    await tx.analyticsSummary.create({ data: analyticsSummaryData });

    // Seed for Weekly Performance
    for (const item of weeklyPerformanceData) {
      await tx.weeklyPerformance.create({ data: item });
    }

    // Seed for Weekly Activities
    for (const item of weeklyActivitiesData) {
      await tx.weeklyActivity.create({ data: item });
    }

    // Seed for Notifications
    for (const item of notificationsData) {
      await tx.notification.create({ data: item });
    }
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
