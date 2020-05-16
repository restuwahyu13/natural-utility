module.exports = function(fastify, options, done) {

        fastify.get("/", (req, res) => {
            res.view("index.ejs", {});
        });

        fastify.post("/", (req, res) => {
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

        fastify.get("/home", (req, res) => {
        		res.send("<h1>Welcome to home</h1>");
        });

    // must be call done because this return to next function
    done()
}
