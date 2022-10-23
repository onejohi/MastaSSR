exports.chainWebpack = (webpackConfig) => {
  if (!process.env.SSR) return;

  webpackConfig.target('node')
  webpackConfig.output.libraryTarget('commonjs2')
}