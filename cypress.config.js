const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "pageLoadTimeout": 300000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
