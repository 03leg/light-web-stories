module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['airbnb-base','airbnb-typescript/base'],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
