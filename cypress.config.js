const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://localhost:3000',
    specPattern: 'src/testes/cypress',
    supportFile: 'src/testes/cypress/support/e2e.js'
  },
});
