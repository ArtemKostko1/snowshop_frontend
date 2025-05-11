module.exports = function override(config, env) {
  config.resolve.extensions = [
    ...config.resolve.extensions,
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
  ];

  config.resolve.alias = {
    ...config.resolve.alias,
    "./get-context": "./get-context.js",
  };

  return config;
};
