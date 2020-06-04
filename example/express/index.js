// register all module
const natural = require("../../lib/index");
natural.globalModule(
["express", "http", "mongoose", "bodyParser", "cookieParser", "logger", "path"],
["express", "http", "mongoose", "body-parser", "cookie-parser", "morgan", "path"]);

// init all module
const app = express();
const router = express.Router();
const server = http.createServer(app);

// init all route
const indexRoute = require("./routes/index.route");
const userRoute = require("./routes/user.route")

// setup global promise
mongoose.Promise = global.Promise;

// setup database connection
mongoose.connect("mongodb://localhost:27017/demo",
{useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true, useFindAndModify: false})
.then(() => console.log("database connected successfully"))
.catch(() => console.log("database connection failed"));

//  register all plugin middleware
natural.pluginMiddleware(app, [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cookieParser(),
    natural.flashExpress(),
    logger("dev")
]);

//  register all plugin middleware using chaining middleware
// natural.pluginMiddlewareAsync(app, [
//     bodyParser.urlencoded({ extended: false }),
//     bodyParser.json(),
//     cookieParser(),
// ])
//.use(logger("dev"));

// register all route middleware
natural.routeMiddleware(app, [indexRoute, userRoute]);

// set configs and template engine
app.set("views", path.join(__dirname, "/views/"));
app.set("view engine", "ejs");
app.set("env", process.env.PORT || 3001);
app.set("x-powered-by", false);

// listening server
server.listen(app.get("env"), () => console.log("server is running"));
