// register all module
const natural = require("../../lib/index");
natural.globalModule(
["koa", "http", "Router", "mongoose", "bodyParser", "logger", "jwt", "views", "path"],
["koa", "http", "koa-router", "mongoose", "koa-body", "koa-logger", "jsonwebtoken", "koa-views", "path"]);

// init all module
const app = new koa();
const server = http.createServer(app.callback());
const router = new Router();

// setup global promise
mongoose.Promise = global.Promise;

// setup database connection
mongoose.connect("mongodb://localhost:27017/demo",
{useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true, useFindAndModify: false})
.then(() => console.log("database connected successfully"))
.catch(() => console.log("database connection failed"));

// init all route
const indexRoute = require("./routes/index.route");
const loginRoute = require("./routes/login.route");
const registerRoute = require("./routes/register.route");
const userRoute = require("./routes/user.route");

// register all plugin middleware
natural.pluginMiddleware(app, [
	 views(path.join(__dirname, "/views/"), {extension: "ejs"}),
    bodyParser({urlencoded: true, json: true}),
    logger(),
    natural.flashKoa()
]);

// register all plugin middleware using chainning middleware
// natural.pluginMiddleware(app, [
// 	 views(path.join(__dirname, "/views/"), {extension: "ejs"}),
//     bodyParser({urlencoded: true, json: true}),
// ])
// .use(logger())
// .use(natural.flashKoa())

// register all route  middleware
natural.routeMiddleware(app, [
    indexRoute.routes(),
		userRoute.routes(),
	  loginRoute.routes(),
		registerRoute.routes(),
]);

// listening server
server.listen(3000, () => console.log("server is running"));
