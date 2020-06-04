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
const naturalPlugin = require("./lib/natural-plugin-middleware");
const naturalFlashExpress = require("./lib/natural-flash-express");
const naturalFlashKoa = require("./lib/natural-flash-koa");
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