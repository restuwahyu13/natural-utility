const natural = require("natural");

// injected for global module
natural.globalModule(
["express", "http", "mongoose", "bodyParser", "cookieParser", "logger"],
["express", "http", "mongoose", "body-parser", "cookie-parser", "morgan"]);

// init module
const app = express();
const router = express.Router();
const server = http.createServer(app);

// setup global promise
mongoose.Promise = global.Promise;

// setup database connection
mongoose.connect("mongodb://localhost:27017/demo",
{useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true, useFindAndModify: false})
.then(() => console.log("database connected successfully"))
.catch(() => console.log("database connection failed"));

// init user route
const indexRoute = require("./routes/user.route");

//  register to plugin middleware
natural.pluginMiddleware(app, [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cookieParser(),
    logger("dev")
]);

// register to route middleware
natural.routeMiddleware(app, [indexRoute(router)]);

// set configs
app.set("env", process.env.PORT || 3000);
app.set("x-powered-by", false);

// listeing server
server.listen(app.get("env"), () => console.log("server is running"));
