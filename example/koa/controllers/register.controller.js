const userSchema = require("../models/user.model");

/**
 * @request POST
 * @route /register
 * @description route method for user registration
 */

exports.registerController = async (ctx, next) => {

  const result  = await userSchema.findOne({name: ctx.request.body.name}).lean();

  if(result) ctx.throw(409, "Username already exists");

    const userData = new userSchema({
        name: ctx.request.body.name,
        age: ctx.request.body.age,
        hobby: ctx.request.body.hobby,
        country: ctx.request.body.country,
        state: ctx.request.body.state,
  });

  const savingData  = await userData.save();

  if(!savingData) ctx.throw(200, "register failed");
  ctx.body = {msg: "register successfully, please login"};

  await next();
}