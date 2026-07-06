import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // ścieżka do testów E2E
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    baseUrl: "http://localhost:3000",
    // ⏱️ globalny timeout dla komend Cypress (w milisekundach)
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "Sarah,",
    },

    setupNodeEvents(on, config) {
      return config;
      defaultComm;
    },
  },
});
