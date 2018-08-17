'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FILE_DOMAIN:'"https://file.31huiyi.com/"',
  BASE_API: '"http://localhost:8080"'
})
