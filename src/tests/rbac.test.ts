import { describe, expect, it } from "vitest";

import { ac, adminRole, editorRole, viewerRole } from "../access.js";

describe("RBAC Access Control", () => {
  describe("Access control statements", () => {
    it("Defines custom resource statements", () => {
      const { statements } = ac;
      expect(statements.dashboard).toContain("view");
      expect(statements.analytics).toContain("view");
      expect(statements.orders).toEqual(
        expect.arrayContaining(["view", "edit"]),
      );
      expect(statements.customers).toEqual(
        expect.arrayContaining(["view", "edit"]),
      );
      expect(statements.products).toEqual(
        expect.arrayContaining(["view", "edit"]),
      );
    });

    it("Includes default admin statements (user, session)", () => {
      const { statements } = ac;
      expect(statements.user).toBeDefined();
      expect(statements.session).toBeDefined();
    });
  });

  describe("Admin role", () => {
    it("Can view all resources", () => {
      expect(adminRole.authorize({ dashboard: ["view"] }).success).toBe(true);
      expect(adminRole.authorize({ analytics: ["view"] }).success).toBe(true);
      expect(adminRole.authorize({ orders: ["view"] }).success).toBe(true);
      expect(adminRole.authorize({ customers: ["view"] }).success).toBe(true);
      expect(adminRole.authorize({ products: ["view"] }).success).toBe(true);
    });

    it("Can edit orders, customers, products", () => {
      expect(adminRole.authorize({ orders: ["edit"] }).success).toBe(true);
      expect(adminRole.authorize({ customers: ["edit"] }).success).toBe(true);
      expect(adminRole.authorize({ products: ["edit"] }).success).toBe(true);
    });

    it("Has admin-level user management permissions", () => {
      expect(adminRole.authorize({ user: ["create"] }).success).toBe(true);
      expect(adminRole.authorize({ user: ["list"] }).success).toBe(true);
      expect(adminRole.authorize({ user: ["set-role"] }).success).toBe(true);
      expect(adminRole.authorize({ user: ["ban"] }).success).toBe(true);
      expect(adminRole.authorize({ user: ["delete"] }).success).toBe(true);
    });

    it("Has session management permissions", () => {
      expect(adminRole.authorize({ session: ["list"] }).success).toBe(true);
      expect(adminRole.authorize({ session: ["revoke"] }).success).toBe(true);
      expect(adminRole.authorize({ session: ["delete"] }).success).toBe(true);
    });

    it("Stores correct statements in role definition", () => {
      expect(adminRole.statements.dashboard).toEqual(["view"]);
      expect(adminRole.statements.analytics).toEqual(["view"]);
      expect(adminRole.statements.orders).toEqual(
        expect.arrayContaining(["view", "edit"]),
      );
    });
  });

  describe("Editor role", () => {
    it("Can view all resources", () => {
      expect(editorRole.authorize({ dashboard: ["view"] }).success).toBe(true);
      expect(editorRole.authorize({ analytics: ["view"] }).success).toBe(true);
      expect(editorRole.authorize({ orders: ["view"] }).success).toBe(true);
      expect(editorRole.authorize({ customers: ["view"] }).success).toBe(true);
      expect(editorRole.authorize({ products: ["view"] }).success).toBe(true);
    });

    it("Can edit orders, customers, products", () => {
      expect(editorRole.authorize({ orders: ["edit"] }).success).toBe(true);
      expect(editorRole.authorize({ customers: ["edit"] }).success).toBe(true);
      expect(editorRole.authorize({ products: ["edit"] }).success).toBe(true);
    });

    it("Does not have user management permissions", () => {
      const statements = editorRole.statements as Record<string, unknown>;
      expect(statements.user).toBeUndefined();
    });

    it("Does not have session management permissions", () => {
      const statements = editorRole.statements as Record<string, unknown>;
      expect(statements.session).toBeUndefined();
    });
  });

  describe("Viewer role", () => {
    it("Can view all resources", () => {
      expect(viewerRole.authorize({ dashboard: ["view"] }).success).toBe(true);
      expect(viewerRole.authorize({ analytics: ["view"] }).success).toBe(true);
      expect(viewerRole.authorize({ orders: ["view"] }).success).toBe(true);
      expect(viewerRole.authorize({ customers: ["view"] }).success).toBe(true);
      expect(viewerRole.authorize({ products: ["view"] }).success).toBe(true);
    });

    it("Cannot edit orders", () => {
      const result = viewerRole.authorize({ orders: ["edit"] });
      expect(result.success).toBe(false);
    });

    it("Cannot edit customers", () => {
      const result = viewerRole.authorize({ customers: ["edit"] });
      expect(result.success).toBe(false);
    });

    it("Cannot edit products", () => {
      const result = viewerRole.authorize({ products: ["edit"] });
      expect(result.success).toBe(false);
    });

    it("Does not have user management permissions", () => {
      const statements = viewerRole.statements as Record<string, unknown>;
      expect(statements.user).toBeUndefined();
    });

    it("Does not have session management permissions", () => {
      const statements = viewerRole.statements as Record<string, unknown>;
      expect(statements.session).toBeUndefined();
    });
  });

  describe("Role permission boundaries", () => {
    it("Viewer has fewer permissions than editor", () => {
      const viewerKeys = Object.keys(viewerRole.statements);
      const editorKeys = Object.keys(editorRole.statements);
      expect(viewerKeys.length).toBeLessThanOrEqual(editorKeys.length);

      const viewerEditOrders = viewerRole.authorize({ orders: ["edit"] });
      const editorEditOrders = editorRole.authorize({ orders: ["edit"] });
      expect(viewerEditOrders.success).toBe(false);
      expect(editorEditOrders.success).toBe(true);
    });

    it("Editor has fewer permissions than admin", () => {
      const editorStatements = editorRole.statements as Record<string, unknown>;
      expect(editorStatements.user).toBeUndefined();
      expect(adminRole.statements.user).toBeDefined();
    });

    it("Failed authorization returns error message", () => {
      const result = viewerRole.authorize({ orders: ["edit"] });
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });

    it("Multiple permissions can be checked at once", () => {
      const adminResult = adminRole.authorize({
        orders: ["view"],
        customers: ["view"],
        products: ["view"],
      });
      expect(adminResult.success).toBe(true);

      const viewerResult = viewerRole.authorize({
        orders: ["view"],
        customers: ["view"],
        products: ["view"],
      });
      expect(viewerResult.success).toBe(true);
    });
  });
});
