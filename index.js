const e2k = require('express-to-koa')
const webpackDevMiddleware = require('webpack-dev-middleware')


module.exports = (...args) => {
  const devMiddleware = webpackDevMiddleware(...args)
  koaDevMiddleware = e2k(devMiddleware)
  koaDevMiddleware.fileSystem = devMiddleware.fileSystem
  return koaDevMiddleware
}
