const natural = require("./libs/index");

// inject module
natural.globalModule(
  ["express", "bodyParser", "cookieParser", "fs", "path"],
  ["express", "body-parser", "cookie-parser", "fs", "path"]
);

// init module
const app = express();

// init all function middleware
natural.pluginMiddleware(app, [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  natural.flashMessage()
]);

module.exports = app;
