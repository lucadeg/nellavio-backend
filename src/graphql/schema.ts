import { GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";

import { prisma } from "../db.js";
import {
  AnalyticsSummaryType,
  AnalyticsType,
  AssetType,
  BestSellingProductType,
  CustomerSatisfactionType,
  CustomerType,
  EventType,
  FourSmallCardType,
  HomepageType,
  KpiType,
  MarketMetricsType,
  NotificationType,
  OrderType,
  ProductType,
  RecentTransactionType,
  RevenueOverTimeType,
  RevenuePerCountryType,
  RevenueTrendType,
  SalesChannelType,
  ThreeSmallCardType,
  TodaySalesType,
  TopCustomerType,
  WeeklyActivityType,
  WeeklyPerformanceType,
  YearOverviewType,
} from "./types.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    assets: {
      type: new GraphQLList(AssetType),
      resolve() {
        return prisma.asset.findMany();
      },
    },
    bestSellingProducts: {
      type: new GraphQLList(BestSellingProductType),
      resolve() {
        return prisma.bestSellingProduct.findMany();
      },
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve() {
        return prisma.customer.findMany();
      },
    },
    customerSatisfaction: {
      type: new GraphQLList(CustomerSatisfactionType),
      resolve() {
        return prisma.customerSatisfaction.findMany();
      },
    },
    events: {
      type: new GraphQLList(EventType),
      resolve() {
        return prisma.event.findMany();
      },
    },
    threeSmallCards: {
      type: new GraphQLList(ThreeSmallCardType),
      resolve() {
        return prisma.threeSmallCard.findMany();
      },
    },
    fourSmallCards: {
      type: new GraphQLList(FourSmallCardType),
      resolve() {
        return prisma.fourSmallCard.findMany();
      },
    },
    revenueTrends: {
      type: new GraphQLList(RevenueTrendType),
      resolve() {
        return prisma.revenueTrend.findMany();
      },
    },
    orders: {
      type: new GraphQLList(OrderType),
      resolve() {
        return prisma.order.findMany();
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return prisma.product.findMany();
      },
    },
    revenuePerCountry: {
      type: new GraphQLList(RevenuePerCountryType),
      resolve() {
        return prisma.revenuePerCountry.findMany();
      },
    },
    revenueOverTime: {
      type: new GraphQLList(RevenueOverTimeType),
      resolve() {
        return prisma.revenueOverTime.findMany();
      },
    },
    todaySales: {
      type: new GraphQLList(TodaySalesType),
      resolve() {
        return prisma.todaySales.findMany();
      },
    },
    yearOverview: {
      type: new GraphQLList(YearOverviewType),
      resolve() {
        return prisma.yearOverview.findMany();
      },
    },
    marketMetrics: {
      type: new GraphQLList(MarketMetricsType),
      resolve() {
        return prisma.marketMetrics.findMany();
      },
    },
    weeklyPerformance: {
      type: new GraphQLList(WeeklyPerformanceType),
      resolve() {
        return prisma.weeklyPerformance.findMany();
      },
    },
    weeklyActivities: {
      type: new GraphQLList(WeeklyActivityType),
      resolve() {
        return prisma.weeklyActivity.findMany();
      },
    },
    notifications: {
      type: new GraphQLList(NotificationType),
      resolve() {
        return prisma.notification.findMany();
      },
    },
    analytics: {
      type: AnalyticsType,
      resolve: async () => {
        try {
          const [
            assets,
            revenueTrends,
            todaySales,
            yearOverview,
            marketMetrics,
            kpis,
            recentTransactions,
            topCustomers,
            salesChannels,
            summary,
          ] = await Promise.all([
            prisma.asset.findMany(),
            prisma.revenueTrend.findMany(),
            prisma.todaySales.findMany(),
            prisma.yearOverview.findMany(),
            prisma.marketMetrics.findMany(),
            prisma.kpi.findMany(),
            prisma.recentTransaction.findMany(),
            prisma.topCustomer.findMany(),
            prisma.salesChannel.findMany(),
            prisma.analyticsSummary.findFirst(),
          ]);

          return {
            assets,
            revenueTrends,
            todaySales,
            yearOverview,
            marketMetrics,
            kpis,
            recentTransactions,
            topCustomers,
            salesChannels,
            summary,
          };
        } catch (error) {
          console.error("Failed to resolve analytics query:", error);
          throw error;
        }
      },
    },
    homepage: {
      type: HomepageType,
      resolve() {
        return Promise.all([
          prisma.bestSellingProduct.findMany(),
          prisma.customerSatisfaction.findMany(),
          prisma.threeSmallCard.findMany(),
          prisma.fourSmallCard.findMany(),
          prisma.revenueOverTime.findMany(),
          prisma.revenuePerCountry.findMany(),
          prisma.weeklyPerformance.findMany(),
          prisma.weeklyActivity.findMany(),
        ]).then(
          ([
            bestSellingProducts,
            customerSatisfaction,
            threeSmallCards,
            fourSmallCards,
            revenueOverTime,
            revenuePerCountry,
            weeklyPerformance,
            weeklyActivities,
          ]) => ({
            bestSellingProducts,
            customerSatisfaction,
            threeSmallCards,
            fourSmallCards,
            revenueOverTime,
            revenuePerCountry,
            weeklyPerformance,
            weeklyActivities,
          }),
        );
      },
    },
  },
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
  types: [
    AssetType,
    BestSellingProductType,
    CustomerType,
    CustomerSatisfactionType,
    EventType,
    ThreeSmallCardType,
    FourSmallCardType,
    RevenueTrendType,
    NotificationType,
    OrderType,
    ProductType,
    RevenueOverTimeType,
    RevenuePerCountryType,
    TodaySalesType,
    YearOverviewType,
    MarketMetricsType,
    WeeklyPerformanceType,
    WeeklyActivityType,
    KpiType,
    RecentTransactionType,
    TopCustomerType,
    SalesChannelType,
    AnalyticsSummaryType,
    AnalyticsType,
    HomepageType,
  ],
});

export default schema;
