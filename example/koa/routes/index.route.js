const router = new Router();

router.get("/flash", async(ctx, next) => {
 	 await ctx.render("index", {title: "tes"});
});

router.post("/flash", async(ctx, next) => {
 if(!ctx.request.body.username) {
   const errors = ["username is required", "username not found", "username must be string"];
  		 for(let i of errors) {
   	 		ctx.flash(i);
    		}
  		 ctx.redirect("/flash");
	 }else{
	 	  ctx.redirect("/home");
	 }
});

router.get("/home", async(ctx, next) => {
		ctx.body = `<h1>Welcome to home</h1>`;
		await next();
});

module.exports = router;
