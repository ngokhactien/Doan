const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const withCSS = require("@zeit/next-css");
// const withSass = require("@zeit/next-sass");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

require("./dotenv.config");
const customConfig = {
  publicRuntimeConfig: {
    HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
    MODE: process.env.MODE
  }
};

// module.exports = withSass({
//   sassLoaderOptions: {
//     includePaths: [path.resolve(__dirname, "/src/assets/styles")],
//   },
// });

module.exports = withBundleAnalyzer(
  withCSS({
    ...customConfig,
    webpack: config => {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          },
        }
      });
      config.plugins.push(
        new CopyWebpackPlugin([
          {
            from: path.join(__dirname, "node_modules/nprogress/nprogress.css"),
            to: path.join(__dirname, "public/css/nprogress.css")
          },
          {
            from: path.join(__dirname, "node_modules/antd/dist/antd.min.css"),
            to: path.join(__dirname, "public/css/antd.min.css")
          }
        ])
      );
      return config;
    }
  })
);
