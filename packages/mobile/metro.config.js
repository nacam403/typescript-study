/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const watchFolders = [path.resolve(__dirname, '../../node_modules')];

const blockList = [/\/backend\//, /\/cdk\//, /\/nextjs-study\//];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'module', 'main'],
    blockList,
  },
  watchFolders,
};
