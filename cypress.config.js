const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cac-tat.s3.eu-central-1.amazonaws.com',
  },
  fixturesFolder: false,
})
