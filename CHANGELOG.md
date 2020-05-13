natural ChangeLog
-------------------------

1.0.6.1
 * fixed parallel pluginMiddleware support chaining middleware using koa
 * remove pluginMiddlewareAsync

1.0.6
 * add new feature support fastify
 * fixed parallel pluginMiddleware support chaining middleware
 * add new method support asyncronus using pluginMiddlewareAsync
 * pluginMiddlewareAsync support callback promise
 * fixed parallel route middleware using koajs

1.0.5
 * fixed parallel route middleware not support asyncronus
 * add new feature pluginMiddleware and routeMiddleware supporty for koajs
 * fixed bug duplicate value on parallel routeMiddleware
 * fixed bug duplicate value on parallel pluginMiddleware
 * fixed bug message delay on flashMessage

1.0.4

 * remove global module access using global.inject instead of using the appropriate input provided via globalModule
 * add new feature pluginMiddleware
 * improve performance on parallel routeMiddleware
 * improve performance on parallel globalModule

 1.0.3
 * change global module access using req.natural to global.inject
 * remove express dependency for global module
 * fixed flash message bug not support multiple message
 * fixed bug middleware not support custom route middleware

1.0.2

  * add global access module using req.natural
  * remove logger function
  * remove cookie parser function
  * remove body parser function

  1.0.1
  * add the logger function
  * add the cookie parser function
  * add the body parser function
  * add the parallel module function
  * add the parallel route function
  * add the flash message function
