// register all module
const natural = require("../../index");
natural.globalModule(
["fastify", "path", "fastifyStatic", "fastifyView"], 
["fastify", "path",  "fastify-static", "point-of-view"]);

// init all module
const app = fastify();
const userRoute = require("./routes/index");

// register all function middleware
natural.pluginMiddleware(app, 
  [fastifyStatic, fastifyView], 
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
natural.routeMiddleware(app, [userRoute]);

// listening server
app.listen(3002, () => console.log(`server is running`));