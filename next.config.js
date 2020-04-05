const tsconfig = require("./tsconfig.json");
const tsPaths = tsconfig.compilerOptions.paths;
const path = require("path");
const nextConfig = {
  crossOrigin: "anonymous",
  /*
   * Modifying Webpack
   */
  webpack(config) {
    /*
      Convert tsconfig path
      {
        '@components/*': [ './src/components/*' ],
      }
      To webpack aliases
      {
        config.resolve.alias['@components'] = path.join(__dirname, './src/components')
      }
    */
    /*
     * Aliases, Absolute Imports
     *
     * https://github.com/zeit/next.js/blob/master/examples/with-absolute-imports/next.config.js
     *
     */
    // eslint-disable-next-line func-names
    Object.keys(tsPaths).forEach(function (key) {
      const newKey = key.replace("/*", "");
      // this only support single src aliases, not arrays of aliases
      // might need to upgrade later if it's really that necessary
      const value = tsPaths[key][0].replace("/*", "");
      config.resolve.alias[newKey] = path.join(__dirname, value);
    });
    return config;
  },
};
module.exports = nextConfig;
