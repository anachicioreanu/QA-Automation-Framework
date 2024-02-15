import { defineConfig } from 'cypress'

export default defineConfig({

  videosFolder: './cypress/videos',
  video: true,
  screenshotsFolder: './cypress/cucumber_report/screenshots',
  fixturesFolder: './cypress/fixtures',
  projectId: '9iq8ri',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: '*.ts',
  },
})
