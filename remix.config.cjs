const postcss = require('postcss');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  // Change this to static for GitHub Pages
  serverBuildTarget: "static",
  tailwind: true,
  postcss: true,
  // Configure static files directory for GitHub Pages
  publicPath: "/steelthumb-www/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  // Add this for GitHub Pages
  basePath: "/steelthumb-www",
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
};
