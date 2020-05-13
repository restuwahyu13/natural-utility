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
* @param { Object } option
*/
function NaturalPlugin (app, plugin, option) {
  this.plugins = undefined
  switch (typeof plugin && typeof app) {
    case 'object':
    case 'function':
      this.plugins = this.injectPlugin(app, plugin, option)
      return this.plugins
  }
}
/**
*  function method for register any plugin in express js with middleware
*
* @param { Function } app
* @param { Array } plugin
* @param { Object } option
*/
NaturalPlugin.prototype.injectPlugin = function (app, plugin, option) {
  this.plugins = undefined
  this.middleware = undefined
  switch (typeof plugin && typeof app) {
    case 'object':
    case 'function':
      this.plugins = plugin.filter((plugins, i) => plugin.indexOf(plugins) === i)
      this.plugins.forEach((plugins, i) => {
        this.middleware = (typeof option !== 'object')
          ? app.use(plugins)
          : app.register(plugins, option)
      })
      return this.middleware
  }
}
/**
*plugin middleware to register each given plugin, the plugin will be run as parallel, which it haven't to rewrite app.use middleware many of times to register every each plugin.
*
* @param { Function | Object } app
* @param { Array } plugins - Array
* @param { Object } options - Object
*/
function pluginMiddleware (app, plugins, options) {
  switch (typeof plugins && typeof app) {
    case 'object':
    case 'function':
      this.plugins =  new NaturalPlugin(app, plugins, options)
      return this.plugins
  }
}

module.exports = pluginMiddleware
