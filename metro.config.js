// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const watchFolders = [
  path.resolve(__dirname, "./packages/modules"),
  path.resolve(__dirname, "node_modules"),
];

const blockList = [
  /packages\/backend/,
  /node_modules\/backend/,
  /packages\/cdk/,
  /node_modules\/cdk/,
  /packages\/nextjs-study/,
  /node_modules\/nextjs-study/,
];

module.exports = {
  projectRoot: path.join(__dirname, "packages/mobile"),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    resolverMainFields: ["react-native", "browser", "module", "main"],
    blockList,
  },
  watchFolders,
};
