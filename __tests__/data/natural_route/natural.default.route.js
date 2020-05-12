const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const axios = require("axios");

router.get("/test2", function(req, res, next) {

  const readFile =  fs.createReadStream(path.join(__dirname, "../../../big.dummy.json"));

      var data = "";

      readFile.on('data', function(chunk) {
          data += chunk;
      });

      readFile.on("end", function() {

            const parse = JSON.parse(data);
             res.json({data: parse});
      });
      
      return next();
});

router.get("/test3", async function(req, res, next) {
     
     const fetchApi = await axios.get("https://jsonplaceholder.typicode.com/photos");
     res.json({data: fetchApi.data});

  });

module.exports = router;