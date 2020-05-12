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
* @param { Function } route
*/
function NaturalRoute (app, route) {
  this.routes = undefined;
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
* @param { Function } route
* @return {Function} Function
*/
NaturalRoute.prototype.injectRoute = function (app, route) {
  this.routes = undefined;
  this.middleware = undefined;
  switch (typeof route && typeof app) {
    case 'object':
    case 'function':
      this.routes = route.filter((routes, i) => route.indexOf(routes) === i)
      this.routes.forEach(routes => {
        this.middleware = Promise.resolve(app.use(routes))
      })
      return this.middleware
  }
}
/**
* route middleware to register each given route, then the route will be run in parallel, without the need to repeat writing app.use middleware repeatedly to register each route.
*
* @param {Function} app
* @param { Function } route
*/
function routeMiddleware (app, route) {
  switch (typeof route && typeof app) {
    case 'object':
    case 'function':
      return new NaturalRoute(app, route)
  }
}

module.exports = routeMiddleware
