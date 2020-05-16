// register all module
const natural = require("../../lib/index");
natural.globalModule(
["fastify", "path", "fastifyStatic", "fastifyView", "fastifyBody"],
["fastify", "path",  "fastify-static", "point-of-view", "fastify-formbody"]);

// init all module
const app = fastify();

// init all route
const indexRoute = require("./routes/index");

// register all function middleware using chaining
// NOTE: using template engine must be using chaining middleware
natural.pluginMiddleware(app,
  [fastifyStatic, fastifyView, fastifyBody],
  {
    root: path.join(__dirname, "views"),
    secret: "fastify_id",
    engine: {
        ejs: require('ejs')
    }
  }
)
.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  decorateReply: false,
  prefix: '/public/'
});

// register all route middleware
natural.routeMiddleware(app, [indexRoute]);

// listening server
app.listen(3002, () => console.log(`server is running`));
