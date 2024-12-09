const postcss = require('postcss');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverBuildTarget: "static",
  tailwind: true,
  postcss: true,
  publicPath: "/steelthumb-www/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  basePath: "/steelthumb-www",
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
};
