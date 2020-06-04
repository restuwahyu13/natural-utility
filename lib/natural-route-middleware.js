/**
* natural-utility
* @author Copyright(c) 2019-2020 by Restu wahyu saputra
* MIT Licensed
*/
'use strict'
/**
* owner function method for load any route
*
* @param { Function } app
* @param { Array } route
*/
function NaturalRoute (app, route) {
  this.routes = undefined
  switch (typeof route && typeof app) {
    case 'object':
    case 'function':
      this.routes = this.injectRoute(app, route)
      return this.routes
  }
}
/**
*  function method for register any route in express js with middleware
*
* @param {Function} app
* @param { Array } route
* @return {Function} Function
*/
NaturalRoute.prototype.injectRoute = function (app, route) {
  this.compare = 'register' in app
  switch (typeof route && typeof app) {
    case 'object':
    case 'function':
      route.filter((routes, i) => route.indexOf(routes) === i)
      .forEach(routes => {
        this.middleware = (this.compare)
          ? app.register(routes)
          : Promise.resolve(app.use(routes))
      })
      return this.middleware
  }
}
/**
*route middleware to register each given route, then the route will be run as parallel, which it haven't to rewrite app.use middleware many of times to register every each route.
*
* @param {Function | Object} app
* @param { Array } routes Array
*/
function routeMiddleware (app, routes) {
  switch (typeof routes && typeof app) {
    case 'object':
    case 'function':
      this.route = new NaturalRoute(app, routes)
      return this.route
  }
}

module.exports = routeMiddleware
