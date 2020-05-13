// register all module
const natural = require("../../index");
natural.globalModule(
["koa", "http", "Router", "mongoose", "bodyParser", "logger", "jwt"],
["koa", "http", "koa-router", "mongoose", "koa-body", "koa-logger", "jsonwebtoken"]);

// init all module
const app = new koa();
const server = http.createServer(app.callback());

// setup global promise
mongoose.Promise = global.Promise;

// setup database connection
mongoose.connect("mongodb://localhost:27017/demo",
{useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true, useFindAndModify: false})
.then(() => console.log("database connected successfully"))
.catch(() => console.log("database connection failed"));

// register all route
const loginRoute = require("./routes/login.route");
const registerRoute = require("./routes/register.route");
const userRoute = require("./routes/user.route");

// register all plugin middleware with chainning middleware
// natural.pluginMiddleware(app, [
//     bodyParser({urlencoded: true, json: true}),
// ])
//.use(logger());

// register all route  middleware
natural.routeMiddleware(app, [
    indexRoute.routes()
]);

// listening server
server.listen(3000, () => console.log("server is running"));