/**
* natural-utility
* @author Copyright(c) 2019-2020 by Restu wahyu saputra
* MIT Licensed
*/
/**
* Module dependencies.
* @private
*/
const naturalModule = require("./lib/natural-global-module");
const naturalRoute = require("./lib/natural-route-middleware");
const naturalPluginSync = require("./lib/natural-plugin-middlewareSync");
// const naturalPluginAsync = require("./lib/natural-plugin-middlewareAsync");
const naturalFlash = require("./lib/natural-flash");
/**
*  function method for call all module in natural utility
*/
const natural = {
globalModule: naturalModule,
routeMiddleware: naturalRoute,
pluginMiddleware: naturalPluginSync,
// pluginMiddlewareAsync: naturalPluginAsync,
flashMessage: naturalFlash,
};

module.exports = natural;