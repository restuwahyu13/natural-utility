# **natural-utility**

`natural-utility` adalah sebagai alat pembantu sederhana untuk mempermudah pekerjaan anda sebagai **module loader**, **route middleware**, **plugin middleware** dan **flash message**.

[![Build Status](https://travis-ci.com/restuwahyu13/natural-utility.svg?branch=master)](https://travis-ci.com/restuwahyu13/natural-utility) [![Build status](https://ci.appveyor.com/api/projects/status/ju7ciy6fh42rsnkl?svg=true)](https://ci.appveyor.com/project/restuwahyu13/natural-utility) [![codecov](https://codecov.io/gh/restuwahyu13/natural-utility/branch/master/graph/badge.svg)](https://codecov.io/gh/restuwahyu13/natural-utility) [![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/natural-utility/badge.svg?branch=master)](https://coveralls.io/github/restuwahyu13/natural?branch=master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

- [Get Started](#get-started)
	* [Language Translate](#language-translate)
		* [Indonesian](https://github.com/restuwahyu13/natural/tree/master/language/indonesian)
		* [English](https://github.com/restuwahyu13/natural/tree/master/language/english)
	* [Features](#features)
	* [Installation](#installation)
	* [Example Usage](#example-usage)
	* [API References](#api-reference)
		* [naturalModule](#naturalmodule)
		* [naturalRoute](#naturalroute)
		* [naturalPlugin](#naturalplugin)
		* [naturalFlash](#naturalflash)
	* [Working With Database](#working-with-database)
		* [MongoDB](#mongodb)
		* [MySQL](#my-sql)
		* [PostgreeSQL](#postgree-sql)
		* [Mongoose](#mongoose)
- [How To Test](#how-to-test)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [Lincense](#license)

+ ## Get Started

	+ ### Language Translate
		+ [Indonesian]()
		+ [English]()

	+ ### Features
		+	[x] Parallel Module Loader (Support All Framework NodeJs)
		+	[x] Parallel Route Middleware (Support Koa and Express)
		+	[x] Parallel Plugin Middleware (Support Koa and Express)
		+	[x] Flash Message
		+ [x] Global Access Module

	+ ### Installation
		```sh
		$ npm i natural-utility --save
		```
	+ ### Example Usage
		```javascript
		// register all module
		const natural = require("natural-utility");
		natural.globalModule(
		["express", "http", "path",  "bodyParser", "logger", "cookieParser"],
		["express", "http", "path",  "body-parser", "morgan", "cookie-parser"]);

		// init all module
		const app = express();
		const server = http.createServer(app);

		// init all route
		const indexRoute = require("./routes/index.route");

		// register all plugin middleware
		natural.pluginMiddleware(app, [
		  bodyParser.urlencoded({ extended: false }),
		  bodyParser.json(),
		  cookieParser(),
		  logger("dev"),
		  natural.flashMessage()
		]);

		// register template engine
		app.set("views", path.join(__dirname, "/views"));
		app.set("view engine", "ejs");

		// register all route midlleware
		natural.routeMiddleware(app, [indexRoute]);

		// listening server
		server.listen(3000, () => console.log("server is running"));
		```

	+ ### API Reference

		+ #### naturalModule

			+ **globalModule(@param: input, @param: module)** fungsi method dari `naturalModule` untuk  mendaftarkan setiap module yang diberikan tanpa perlu harus menulis  `require` berulang kali, kemudian module akan dijalankan secara parallel, module juga dapat diakses secara global disetiap file atau route yang berbeda, tanpa perlu harus mendaftarkan ulang kembali module yang sama ketika ingin digunakan, **catatan**: global module hanya support format penulisan **CommonJS as require**.

		-  **Before - example usage not using natural-utility**

			+ ```javascript
			  // register all module
			  const express = require("express");
			  const app = express();
			  const http = require("http");
			  const server = http.createServer(app);

			  // listening server
			  server.listen(3000, () => console.log("server is running"));
				```

		-  **After - example usage using natural-utility**

			+  ```javascript
			   // register all module
			   const natural = require("natural-utility");
			   natural.globalModule(["express", "http"], ["express", "http"]);

			   // init all module
			   const app = express();
			   const server = http.createServer(app);

			   // listening server
			   server.listen(3000, () => console.log("server is running"));
				```

		+ #### naturalRoute

			+ **routeMiddleware(@param: app, @param: function)** fungsi method dari `naturalRoute` untuk  mendaftarkan setiap route yang diberikan, kemudian route akan dijalankan secara parallel, tanpa perlu harus mengulangi menulis `app.use` **middleware** berulang kali untuk mendaftarkan setiap route.

		-  **Before - example usage not using natural-utility**

			+ ```javascript
			  // register all module
			  const express = require("express");
			  const app = express();
			  const http = require("http");
			  const server = http.createServer(app);

			  // init all route
			  const indexRoute = require("./routes/home");
			  const usersRoute = require("./routes/users");

			  // register all route middleware
			  app.use(indexRoute);
			  app.use(usersRoute);

			  // listening server
			  server.listen(3000, () => console.log("server is running"));
				```

		-  **After - example usage using natural-utility**

			+ ```javascript
			  // register all module
			  const natural = require("natural-utility");
			  natural.globalModule(["express", "http"], ["express", "http"]);

			  // init all module
			  const app = express();
			  const server = http.createServer(app);

			  // init all route
			  const indexRoute = require("./routes/home");
			  const usersRoute = require("./routes/users");

			  // register all route middleware
			  natural.routeMiddleware(app, [indexRoute, usersRoute]);

			  // listening server
			  server.listen(3000, () => console.log("server is running"));
				```

		+ #### naturalPlugin

			+ **pluginMiddleware(@param: app, @param: function)** fungsi method dari `naturalPlugin` untuk  mendaftarkan setiap plugin yang diberikan, kemudian plugin akan dijalankan secara parallel, tanpa perlu harus mengulangi menulis `app.use` **middleware** berulang kali untuk mendaftarkan setiap plugin.

		-  **Before - example usage not using natural-utility**

			+ ```javascript
			  // register all module
			  const express = require("express");
			  const app = express();
			  const http = require("http");
			  const server = http.createServer(app);
			  const bodyParser = require("body-parser");
			  const cookieParser = require("cookie-parser");
			  const logger = require("morgan");

			  // init all route
			  const indexRoute = require("./routes/home");
			  const usersRoute = require("./routes/users");

			  // register all plugin middleware
			  app.use(bodyParser.urlencoded({ extended: false }));
			  app.use(bodyParser.json());
			  app.use(logger("dev"));

			  // register all route middleware
			  app.use(indexRoute);
			  app.use(usersRoute);

			  // listening server
			  server.listen(3000, () => console.log("server is running"));
			  ```

		-  **After - example usage using natural-utility**

			+ ```javascript
			  // register all module
			  const natural = require("natural-utility");
			  natural.globalModule(
				["express", "http", "bodyParser", "cookieParser", "logger"],
				["express", "http", "body-parser", "cookie-parser", "morgan"]);

			  // init all module
			  const app = express();
			  const server = http.createServer(app);

			  // init all route
			  const indexRoute = require("./routes/home");
			  const usersRoute = require("./routes/users");

			  // register all plugin middleware
			  natural.pluginMiddleware(app, [
				bodyParser.urlencoded({ extended: false }),
				bodyParser.json(),
				logger("dev"),
			  ]);

			  // register all route middleware
			  natural.routeMiddleware(app, [indexRoute, usersRoute]);

			  // listening server
			  server.listen(3000, () => console.log("server is running"));
				```

		+ #### naturalFlash

			+ **flashMessage()** fungsi method dari `naturalFlash` untuk menampilkan pesan kesalahan atau pesan yang lainnya yang mungkin nanti akan ditampilkan,  setiap kali request dibuat, **catatan:** `cookie-parser` dibutuhkan untuk fungsi ini.

		-  **Before - example usage not using natural-utility**

			+  ```javascript
			   //app.js

			   // register all module
			   const express = require("express");
			   const app = express();
			   const http = require("http");
			   const server = http.createServer(app);
			   const flash = require("connect-flash");
			   const session = require("express-session");

			   //init all route
			   const indexRoute = require("./routes/home");
			   const usersRoute = require("./routes/users");

			   // register all plugin middleware
			   app.use(flash());
			   app.use(session({
				 secret: "kucing",
				 resave: false,
				 saveUninitialized: false
			   }));
			   app.use((req, res, next) => {
				 res.locals.messages = require("express-message")(req, res);
			   });

			   // register all route middleware
			   app.use(indexRoute);
			   app.use(usersRoute);

			   // listening server
			   server.listen(3000, () => console.log("server is running"));
			   ```

			+ ```javascript
			  // routes/home.js

			  // register all module
			  const express = require("express");
			  const router = express.Router();

			  // setup route middleware
			  router.get("/", (req, res, next) => {
				req.flash("username already exist");
				res.render("home", {});
			  });

			  // export route middleware
			  module.exports = router;
				```

			+ ```html
			  <!-- views/home.ejs -->

			  <html>
			   <title> Natural </title>
			    <body>
				  <!-- result message -->
				  <h1> <%- messages() %> </h1>
			    </body>
			  </html>
				```

		-  **After - example usage using natural-utility**

			+ ```javascript
			  // app.js

			  // register all module
			  const natural = require("natural-utility");
			  natural.globalModule(
			  ["express", "http", "cookieParser"],
			  ["express", "http", "cookie-parser"]);

			  // init all module
			  const app = express();
			  const server = http.createServer(app);

			  // init all route
			  const indexRoute = require("./routes/home");
			  const usersRoute = require("./routes/users");

			  // register all plugin middleware
			  natural.pluginMiddleware(app, [
				cookieParser(),
				natural.flashMessage()
			  ]);

			  // register all route middleware
			  natural.routeMiddleware(app, [indexRoute]);

			  // listening server
			  server.listen(3000, () => console.log("server is running"));
				```

			+ ```javascript
			  // routes/home.js

			  // register all module
			  const express = express();
			  const router = express.Router();

			  // setup route middleware
			  router.get("/", (req, res, next) => {

			  // single message
				req.flash("username already exist");
				res.render("home", {});
			  });

			  // export route middleware
			  module.exports = router;
				```

			+ ```javascript
			  // routes/home.js

			  // register all module
			  const express = express();
			  const router = express.Router();

			  // setup route middleware
			  router.get("/", (req, res, next) => {

				// multiple message
			    let errors = ["username is required", "email is required", "password is required"];
			    for(let i of errors) {
			      req.flash(i);
			    }
				res.render("home", {});
			  });

			  // export route middleware
			  module.exports = router;
				```

			+ ```html
			  <!-- views/home.ejs -->

			  <html>
			   <title> Natural </title>
				<body>
				  <!-- result message -->
				  <h1> <%- messages() %> </h1>
				</body>
			  </html>
				```

			+ ```html
			  <!-- views/home.ejs -->

			  <html>
			   <title> Natural </title>
				<body>
				  <!-- multiptle message -->
				  <ul>
				  <% if(messages()) { %>
				   <% messages().forEach((msg) => { %>
				       <li> <%= msg %> </li>
				     <%})%>
				    <%}%>
				  </ul>
				</body>
			  </html>
				```

+ ## Working With Database

	+ #### MongoDB

		 + **example usage using mongodb**

			+ ```javascript
			  // register all module
			  const natural = require("natural-utility");
			  natural.globalModule(["mongodb"], ["mongodb"]);

			  // init collection  
			  const database = db.db("testing");

			  // init data  
			  const myData = { name: "John Doe", age: 28 };  

			  // insert data to database
			  database.collection("test").insertOne(myData,function(err, res) {
				   if(err) throw err;  
			       console.log("successfuly store data to database");
			       db.close();  
			     });  
			  });
			  ```

	+ #### MySQL

		 + **example usage using mysql**

			+ ```javascript
			  // register all module
              const natural = require("natural-utility");
			  natural.globalModule(["mysql"], ["mysql"]);

			  // setup database connection
			  const con = mysql.createConnection({
			    host: "localhost",
			    user: "root",
			    password: "",
			    database: "testing"
			  });

			  // init connection
			  con.connect(function(err) {
			  // insert data to database    
			  const sql = "INSERT INTO test (name, age) VALUES ("john doe", 28)";
			  con.query(sql, function (err, result) {
				 if (err) throw err;
				 console.log("data successfuly to store to database");
		        });
			  });
				```

	+ #### PostgreeSQL

		 + **example usage using postgree sql**

			+ ```javascript
			  // register all module
			  const natural = require("natural-utility");
			  natural.globalModule(["pg"], ["pg"]);

			  // setup database connection
			  const client = new pg.Client({
			    user: 'root',
			    host: 'localhost',
			    database: 'testing',
			    password: '123',
			    port: 5432,
			  });

			  // init connection
			  client.connect();

			  // insert data to database
			  const query = `INSERT INTO users (name, age) VALUES ('john doe', 28)`;
			  client.query(query, (err, res) => {
			     if (err) console.error(err);
			     console.log('Data succesfuly to store to database');
			     client.end();
			  });
				```

	+ #### Mongoose

		 + **example usage using mongoose**

			+ ```javascript
			  // register all module
			  const natural = require("natural-utility");
			  natural.globalModule(["mongoose"], ["mongoose"]);
			  // setup database connection
			  mongoose.connect("mongodb://localhost:3000/testing");

			  // setup schema  
		      const setSchema = new mongoose.Schema({
			    name: String,
			    age: Number
			  });

			  // register schema
			  const userSchema = setSchema.model("test", setSchema);

			  // insert data to database
			  userSchema.created({ name: "john doe", age: 28 }, (err, res) => {
			    if(err) return err;
			    console.log("data successfuly store to database");
			  });
				```

+ ## How To Test

	**natural-utility** menggunakan `supertest` untuk mock http request, dengan demikian pengujian tidak lagi mengandalkan server http.

	+	```bash
		$ npm install
		$ npm test
		$ npm run test
		```

+  ## Contributors

  +	 [Vikri Kurniawan](https://github.com/vicrfiport) - English Translator
  +	 [Restu Wahyu Saputra](https://github.com/vicrfiport) - Indonesian Translator

+	## Changelog

	+	[Changelog History](https://github.com/restuwahyu13/natural/blob/master/CHANGELOG.md)

+	## License

	+	[MIT](https://github.com/restuwahyu13/natural/blob/master/LICENSE.md)
