const userSchema = require("../models/user.model");

/**
 * @request POST
 * @route /
 * @description route method for login user
 */
exports.loginController = async(ctx, next) => {

  const result  = await userSchema.findOne({name: ctx.request.body.name}).lean();
  if(!result) ctx.throw(404, "User data not found, please register");
  
  const token =  jwt.sign({_id: result._id}, "37168176663163344", {expiresIn: "1h"});
  ctx.body = {msg: "your token access", token: token};

  await next();

}
