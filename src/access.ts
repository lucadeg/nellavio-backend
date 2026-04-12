/**
 * RBAC Access Control Definitions
 * Defines roles and permissions for the application.
 * Must stay in sync with frontend config/access.ts
 */

import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  dashboard: ["view"],
  analytics: ["view"],
  orders: ["view", "edit"],
  customers: ["view", "edit"],
  products: ["view", "edit"],
} as const;

export const ac = createAccessControl(statement);

export const adminRole = ac.newRole({
  dashboard: ["view"],
  analytics: ["view"],
  orders: ["view", "edit"],
  customers: ["view", "edit"],
  products: ["view", "edit"],
  ...adminAc.statements,
});

export const editorRole = ac.newRole({
  dashboard: ["view"],
  analytics: ["view"],
  orders: ["view", "edit"],
  customers: ["view", "edit"],
  products: ["view", "edit"],
});

export const viewerRole = ac.newRole({
  dashboard: ["view"],
  analytics: ["view"],
  orders: ["view"],
  customers: ["view"],
  products: ["view"],
});
