module.exports = function(fastify, options, done) {

        fastify.get("/", (req, res) => {
            res.view("index.ejs", {title: "hello wordl"});
        });
        
        fastify.post("/", (req, res) => {
            let name = req.body.name;
            res.send(`my name is ${name}`);
        });
    
    // must be call done because this return to next function
    done()
}