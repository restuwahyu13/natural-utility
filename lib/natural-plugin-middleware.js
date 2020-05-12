/**
* natural-utility
* @author Copyright(c) 2019-2020 by Restu wahyu saputra
* MIT Licensed
*/
'use strict'
/**
* owner function method plugin middleware
*
* @param { Function } app
* @param { Array } plugin
*/
function NaturalPlugin (app, plugin) {
  this.plugins = undefined
  switch (typeof plugin && typeof app) {
    case 'object':
    case 'function':
      this.plugins = this.injectPlugin(app, plugin)
      return this.plugins
  }
}
/**
*  function method for register any plugin in express js with middleware
*
* @param { Function } app
* @param { Array } plugin
*/
NaturalPlugin.prototype.injectPlugin = function (app, plugin) {
  this.plugins = undefined
  this.middleware = undefined
  switch (typeof plugin && typeof app) {
    case 'object':
    case 'function':
      this.plugins = plugin.filter((plugins, i) => plugin.indexOf(plugins) === i)
      this.plugins.forEach((plugins, i) => {
        this.middleware = Promise.resolve(app.use(plugins))
      })
      return this.middleware
  }
}
/**
* plugin middleware to register each plugin provided, then the plugin will run in parallel, without the need to have to repeat writing app.use middleware repeatedly to register each plugin.
*
* @param {Function} app
* @param { Array } plugin
*/
function pluginMiddleware (app, plugin) {
  switch (typeof plugin && typeof app) {
    case 'object':
    case 'function':
      return new NaturalPlugin(app, plugin)
  }
}

module.exports = pluginMiddleware
