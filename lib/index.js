/**
* natural-utility
* @author Copyright(c) 2019-2020 by Restu wahyu saputra
* MIT Licensed
*/
/**
* Module dependencies.
* @private
*/
const naturalModule = require("./natural-global-module");
const naturalRoute = require("./natural-route-middleware");
const naturalPlugin = require("./natural-plugin-middleware");
const naturalFlashExpress = require("./natural-flash-express");
const naturalFlashKoa = require("./natural-flash-koa");
/**
*  function method for call all module in natural utility
*/
const natural = {
  globalModule: naturalModule,
  routeMiddleware: naturalRoute,
  pluginMiddleware: naturalPlugin,
  flashExpress: naturalFlashExpress,
  flashKoa: naturalFlashKoa
};

module.exports = natural;
