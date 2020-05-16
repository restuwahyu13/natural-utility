const router = express.Router();

router.get("/flash", (req, res, next) => {
 	 res.render("index", {title: "tes"});
});

router.post("/flash", (req, res, next) => {
 if(!req.body.username) {
   const errors = ["username is required", "username not found", "username must be string"];
  		 for(let i of errors) {
   	 		req.flash(i);
    		}
  		 res.redirect("/flash");
	 }else{
	 	 res.redirect("/home");
	 }
});

router.get("/home", (req, res, next) => {
		res.send("<h1>Welcome to home</h1>");
		return next();
});

module.exports = router;
