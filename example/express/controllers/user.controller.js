const userSchema = require("../models/user.model");

exports.userController = {
       resultsController: function(req, res, next) {

         userSchema.find().lean().exec((err, results) => {
              if(err) return err;
              res.json({msg: "data already to use", data: results});
         });

       },
       createController: function(req, res, next) {

            const userData = new userSchema({
                name: req.body.name,
                age: req.body.age,
                hobby: req.body.hobby,
                country: req.body.country,
                state: req.body.state,
            });
            
            userData.save((err, doc) => {
                if(err) return err;
                res.json({msg: "data successfully store to database", data: doc});
            });
        
       },
     resultController: function(req, res, next) {
          
            userSchema.findById(req.params.id).lean().exec((err, result) => {
                if(err) return err;
                res.json({msg: "data ready to use", data: result});
            });
     },
      deleteController: function(req, res, next) {
            
        userSchema.findOneAndDelete({_id: req.params.id}).exec((err, result) => {
            if(err) return err;
            res.json({msg: "data successfully to deleted"});
        });
  }
  
}