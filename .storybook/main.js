const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias['@root'] = path.join(__dirname, '../src');
    config.resolve.alias['@components'] = path.join(__dirname, '../src/components');
    console.log(JSON.stringify(config.resolve.alias, null, 2));

    // Return the altered config
    return config;
  },
  stories: ['./stories/**/*.stories.[tj]s'],
};