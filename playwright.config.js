import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
  testMatch: '**/CC/PROSPECT/CR.js',

  /* Maximum time one test can run for. */
  timeout: 180000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20000,
  },
  /* tests in parallel */
  workers: 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  projects: [
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13'],
        isMobile: true
      },
    },
  ]
});