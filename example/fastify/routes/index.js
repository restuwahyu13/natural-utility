module.exports = function(fastify, options, done) {
      return [
        fastify.get("/", (req, res) => {
            res.view("index.ejs", {title: "tes"});
        }),
       done()
    ];
}