const path = require('path');

module.exports = {
  stories: [
    '../projects/uic-design/src/lib/components/**/*.stories.mdx',
    '../projects/uic-design/src/lib/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../projects/uic-design/src/lib/directives/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../mock'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/angular',
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      common: path.resolve(__dirname, '../projects/uic-design/style/common.scss'),
    };
    return config;
  },
};
