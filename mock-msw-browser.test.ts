import { setupWorker } from "msw/browser";
import { expect, it, vi } from "vitest";

vi.mock("msw/browser", () => {
  return {
    setupWorker: vi.fn(() => {
      return {
        start: vi.fn(async () => {}),
        stop: vi.fn(),
        use: vi.fn(),
        resetHandlers: vi.fn(),
        restoreHandlers: vi.fn(),
        listHandlers: vi.fn(),
      };
    }),
  };
});

it("can mock msw/browser", async () => {
  expect(setupWorker).not.toBeCalled();
});
