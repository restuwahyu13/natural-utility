const natural = require("./index");

// inject module
natural.globalModule(
  ["express", "bodyParser", "cookieParser", "fs", "path", "cors"],
  ["express", "body-parser", "cookie-parser", "fs", "path", "cors"]
);

// init module
const app = express();

// init all function middleware
natural.pluginMiddleware(app, [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors(),
  natural.flashMessage()
]);

// init all function middleware
natural.pluginMiddlewareAsync(app, [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors(),
  natural.flashMessage()
]);

module.exports = app;
