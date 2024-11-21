import { setupWorker } from "msw/browser";
import { expect, it, vi } from "vitest";
import { Client } from "pg";

vi.mock("pg", () => {
  const Client = vi.fn();

  return { Client };
});

vi.mock("msw/browser", () => {
  return {
    setupWorker: vi.fn(),
  };
});

it("can mock pg", async () => {
  expect(Client).not.toBeCalled();
});

it("can mock msw/browser", async () => {
  expect(setupWorker).not.toBeCalled();
});
