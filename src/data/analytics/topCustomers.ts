type TopCustomer = {
  name: string;
  handle: string;
  amount: number;
  tier: string;
};

export const topCustomersData: TopCustomer[] = [
  {
    name: "Sophia Reyes",
    handle: "sophia@orbit.io",
    amount: 5640,
    tier: "vip",
  },
  {
    name: "Mason Cole",
    handle: "mason@flux.com",
    amount: 3890,
    tier: "pro",
  },
  {
    name: "Ava Whitman",
    handle: "ava@pixel.dev",
    amount: 2470,
    tier: "new",
  },
  {
    name: "Lucas Brandt",
    handle: "lucas@hexa.app",
    amount: 1920,
    tier: "pro",
  },
  {
    name: "Ethan Wu",
    handle: "ethan@drift.co",
    amount: 1340,
    tier: "new",
  },
];
