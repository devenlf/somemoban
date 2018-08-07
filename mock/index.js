const userApi = require('./mockdata/user')
const config = require('../config')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = {
  clientLogLevel: 'warning',
  historyApiFallback: true,
  hot: true,
  compress: true,
  host: HOST || config.dev.host,
  port: PORT || config.dev.port,
  open: config.dev.autoOpenBrowser,
  overlay: config.dev.errorOverlay
    ? { warnings: false, errors: true }
    : false,
  publicPath: config.dev.assetsPublicPath,
  proxy: config.dev.proxyTable,
  quiet: true, // necessary for FriendlyErrorsPlugin
  watchOptions: {
    poll: config.dev.poll
  },
  before(app) {
    // HTTP GET
    app.get('/api/appData', (req, res) => {
      res.json({
        errno: 0,
        data: { a: 1111 }
      })
    })
    // HTTP POST
    app.post('/api/user/searchuser', (req, res) => {
      res.json(userApi.searchUser)
    })
  }
}
