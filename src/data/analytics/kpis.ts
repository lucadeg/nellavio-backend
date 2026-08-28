type Kpi = {
  key: string;
  value: number;
  change: number;
  format: string;
};

export const kpisData: Kpi[] = [
  { key: "sales", value: 24380, change: -3.65, format: "currency" },
  { key: "earnings", value: 67400, change: 6.65, format: "currency" },
  { key: "visitors", value: 14212, change: 5.25, format: "number" },
  { key: "orders", value: 758, change: -2.25, format: "number" },
];
