// See here for all the options: https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md

const cucumberConfig = {
  import: ["test/*.ts", "test/steps/*.ts"],
  // The .features to be taken into consideration by cucumber.
  paths: ["test/features/*.feature"],
  publish: false,
};

export default cucumberConfig;
