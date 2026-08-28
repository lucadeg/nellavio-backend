type RecentTransaction = {
  orderId: string;
  product: string;
  category: string;
  amount: number;
  status: string;
};

export const recentTransactionsData: RecentTransaction[] = [
  {
    orderId: "#7824",
    product: 'MacBook Pro 16"',
    category: "laptop",
    amount: 2499,
    status: "completed",
  },
  {
    orderId: "#7823",
    product: "iPhone 15 Pro",
    category: "phone",
    amount: 999,
    status: "completed",
  },
  {
    orderId: "#7822",
    product: "iPad Air",
    category: "tablet",
    amount: 599,
    status: "completed",
  },
  {
    orderId: "#7821",
    product: "Galaxy Watch 6",
    category: "watch",
    amount: 329,
    status: "pending",
  },
  {
    orderId: "#7820",
    product: "AirPods Pro",
    category: "audio",
    amount: 249,
    status: "completed",
  },
];
