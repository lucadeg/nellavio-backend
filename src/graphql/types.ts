import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GraphQLJSON } from "graphql-type-json";

// Asset Type
export const AssetType = new GraphQLObjectType({
  name: "Asset",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    industry: { type: GraphQLString },
    sales: { type: GraphQLInt },
    delta: { type: GraphQLFloat },
    deltaType: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// BestSellingProduct Type
export const BestSellingProductType = new GraphQLObjectType({
  name: "BestSellingProduct",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    sales: { type: GraphQLFloat },
    profit: { type: GraphQLFloat },
  }),
});

// Customer Type
export const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    photo: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    phone: { type: GraphQLString },
    totalBuys: { type: GraphQLInt },
  }),
});

// CustomerSatisfaction Type
export const CustomerSatisfactionType = new GraphQLObjectType({
  name: "CustomerSatisfaction",
  fields: () => ({
    id: { type: GraphQLString },
    brandName: { type: GraphQLString },
    customerSatisfaction: { type: GraphQLFloat },
    totalSales: { type: GraphQLInt },
    numberOfOrders: { type: GraphQLInt },
  }),
});

// Event Type
export const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLString },
    eventId: { type: GraphQLInt },
    title: { type: GraphQLString },
  }),
});

// ThreeSmallCard Type (3 cards for homepage)
export const ThreeSmallCardType = new GraphQLObjectType({
  name: "ThreeSmallCard",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    metric: { type: GraphQLString },
    metricPrev: { type: GraphQLString },
    delta: { type: GraphQLString },
    deltaType: { type: GraphQLString },
    color: { type: GraphQLString },
    increased: { type: GraphQLBoolean },
    changeValue: { type: GraphQLFloat },
    changeText: { type: GraphQLString },
    chartData: { type: GraphQLJSON },
  }),
});

// FourSmallCard Type (4 cards for Homepage V2)
export const FourSmallCardType = new GraphQLObjectType({
  name: "FourSmallCard",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    metric: { type: GraphQLString },
    metricPrev: { type: GraphQLString },
    delta: { type: GraphQLString },
    deltaType: { type: GraphQLString },
    color: { type: GraphQLString },
    increased: { type: GraphQLBoolean },
    changeValue: { type: GraphQLFloat },
    changeText: { type: GraphQLString },
    chartData: { type: GraphQLJSON },
  }),
});

// WeeklyPerformance Type
export const WeeklyPerformanceType = new GraphQLObjectType({
  name: "WeeklyPerformance",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    revenue: { type: GraphQLFloat },
    profit: { type: GraphQLFloat },
  }),
});

// WeeklyActivity Type
export const WeeklyActivityType = new GraphQLObjectType({
  name: "WeeklyActivity",
  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: GraphQLString },
    action: { type: GraphQLString },
    time: { type: GraphQLString },
    icon: { type: GraphQLString },
    color: { type: GraphQLString },
  }),
});

// Notification Type
export const NotificationType = new GraphQLObjectType({
  name: "Notification",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    time: { type: GraphQLString },
    icon: { type: GraphQLString },
    isNew: { type: GraphQLBoolean },
  }),
});

// RevenueTrend Type
export const RevenueTrendType = new GraphQLObjectType({
  name: "RevenueTrend",
  fields: () => ({
    id: { type: GraphQLString },
    month: { type: GraphQLString },
    sales: { type: GraphQLFloat },
    profit: { type: GraphQLFloat },
  }),
});

// Order Type
export const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLString },
    orderId: { type: GraphQLInt },
    productName: { type: GraphQLString },
    user: { type: GraphQLString },
    price: { type: GraphQLFloat },
    deliveryType: { type: GraphQLString },
    date: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// Product Type
export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    productId: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
    parameters: { type: GraphQLJSON },
    metrics: { type: GraphQLJSON },
  }),
});

// RevenuePerCountry Type
export const RevenuePerCountryType = new GraphQLObjectType({
  name: "RevenuePerCountry",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

// RevenueOverTime Type
export const RevenueOverTimeType = new GraphQLObjectType({
  name: "RevenueOverTime",
  fields: () => ({
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    websiteSales: { type: GraphQLInt },
    inStoreSales: { type: GraphQLInt },
  }),
});

// TodaySales Type
export const TodaySalesType = new GraphQLObjectType({
  name: "TodaySales",
  fields: () => ({
    id: { type: GraphQLString },
    hour: { type: GraphQLString },
    today: { type: GraphQLInt },
    average: { type: GraphQLInt },
    yesterday: { type: GraphQLInt },
  }),
});

// YearOverview Type
export const YearOverviewType = new GraphQLObjectType({
  name: "YearOverview",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    phones: { type: GraphQLInt },
    tablets: { type: GraphQLInt },
    laptops: { type: GraphQLInt },
  }),
});

// MarketMetrics Type
export const MarketMetricsType = new GraphQLObjectType({
  name: "MarketMetrics",
  fields: () => ({
    id: { type: GraphQLString },
    metric: { type: GraphQLString },
    phones: { type: GraphQLInt },
    maxValue: { type: GraphQLInt },
    laptops: { type: GraphQLInt },
  }),
});

// Kpi Type
export const KpiType = new GraphQLObjectType({
  name: "Kpi",
  fields: () => ({
    id: { type: GraphQLString },
    key: { type: GraphQLString },
    value: { type: GraphQLFloat },
    change: { type: GraphQLFloat },
    format: { type: GraphQLString },
  }),
});

// RecentTransaction Type
export const RecentTransactionType = new GraphQLObjectType({
  name: "RecentTransaction",
  fields: () => ({
    id: { type: GraphQLString },
    orderId: { type: GraphQLString },
    product: { type: GraphQLString },
    category: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    status: { type: GraphQLString },
  }),
});

// TopCustomer Type
export const TopCustomerType = new GraphQLObjectType({
  name: "TopCustomer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    handle: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    tier: { type: GraphQLString },
  }),
});

// SalesChannel Type
export const SalesChannelType = new GraphQLObjectType({
  name: "SalesChannel",
  fields: () => ({
    id: { type: GraphQLString },
    key: { type: GraphQLString },
    share: { type: GraphQLInt },
  }),
});

// AnalyticsSummary Type (single row)
export const AnalyticsSummaryType = new GraphQLObjectType({
  name: "AnalyticsSummary",
  fields: () => ({
    id: { type: GraphQLString },
    todaySalesTotal: { type: GraphQLFloat },
  }),
});

export const AnalyticsType = new GraphQLObjectType({
  name: "Analytics",
  fields: () => ({
    assets: { type: new GraphQLList(AssetType) },
    revenueTrends: { type: new GraphQLList(RevenueTrendType) },
    todaySales: { type: new GraphQLList(TodaySalesType) },
    yearOverview: { type: new GraphQLList(YearOverviewType) },
    marketMetrics: { type: new GraphQLList(MarketMetricsType) },
    kpis: { type: new GraphQLList(KpiType) },
    recentTransactions: { type: new GraphQLList(RecentTransactionType) },
    topCustomers: { type: new GraphQLList(TopCustomerType) },
    salesChannels: { type: new GraphQLList(SalesChannelType) },
    summary: { type: AnalyticsSummaryType },
  }),
});

export const HomepageType = new GraphQLObjectType({
  name: "Homepage",
  fields: () => ({
    bestSellingProducts: { type: new GraphQLList(BestSellingProductType) },
    customerSatisfaction: { type: new GraphQLList(CustomerSatisfactionType) },
    threeSmallCards: { type: new GraphQLList(ThreeSmallCardType) },
    fourSmallCards: { type: new GraphQLList(FourSmallCardType) },
    revenueOverTime: { type: new GraphQLList(RevenueOverTimeType) },
    revenuePerCountry: { type: new GraphQLList(RevenuePerCountryType) },
    weeklyPerformance: { type: new GraphQLList(WeeklyPerformanceType) },
    weeklyActivities: { type: new GraphQLList(WeeklyActivityType) },
  }),
});
