/* eslint valid-jsdoc: "off" */

'use strict'
const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587401668498_4093'

  // cluster config
  config.cluster = {
    listen: {
      port: appInfo.env === 'prod' ? 80 : 7001,
    },
  }

  // static file serving
  config.static = {
    prefix: '/',
    dir: path.resolve(appInfo.baseDir, '../Admin/dist'),
  }

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    cors: {
      origin: 'http://localhost:8080',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
      credentials: true,
    },
  }

  return {
    ...config,
    ...userConfig,
  }
}
