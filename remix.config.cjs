/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverBuildTarget: "node-cjs",
  // Configure static files directory
  publicPath: "/steelthumb-www/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
