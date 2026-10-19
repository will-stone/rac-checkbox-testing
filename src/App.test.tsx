import { describe, expect, test } from "vite-plus/test";
import { render } from "vitest-browser-react";
import App from "./App";

describe("RAC", () => {
  test("should check checkbox in an uncontrolled component by clicking by test-id", async () => {
    const screen = await render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "RAC Checkbox" });
    await expect.element(checkbox).not.toBeChecked();
    const checkboxByTestId = screen.getByTestId("rac-button");
    await checkboxByTestId.click();
    await expect.element(checkbox).toBeChecked();
  });

  test("should check checkbox in an uncontrolled component by clicking by role", async () => {
    const screen = await render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "RAC Checkbox" });
    await expect.element(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect.element(checkbox).toBeChecked();
  });
});

describe("BaseUI", () => {
  test("should check checkbox in an uncontrolled component by clicking by role", async () => {
    const screen = await render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "BaseUI Checkbox" });
    await expect.element(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect.element(checkbox).toBeChecked();
  });
});
