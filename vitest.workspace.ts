import { defineProject, defineWorkspace } from "vitest/config";

export default defineWorkspace([
  defineProject({
    test: {
      name: "chromium",
      browser: {
        enabled: true,
        headless: true,
        provider: "playwright",
        name: "chromium",
      },
    },
  })
]);
