const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require('resolve')
const { config } = require("process");

module.exports = (on) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', {
      baseDir: config.projectRoot,
      nonGlobalStepDefinitions: true,
    }),
  }

  on("file:preprocessor", cucumber(options));
  return config
};