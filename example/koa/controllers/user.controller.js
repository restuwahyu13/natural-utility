const userSchema = require("../models/user.model");

/**
 * @request GET
 * @route /users
 * @description route method for results all user
 */

exports.resultsController =  async(ctx, next) => {

  const resultData = await userSchema.find().lean();

  if(!resultData) ctx.throw(404, "User not found");
  ctx.body = resultData;
  
  await next();
}

/**
 * @request POST
 * @route /user
 * @description route method for created new user
 */

exports.createController = async (ctx, next) => {

      const resultData  = await userSchema.findOne({name: ctx.request.body.name}).lean();

      if(resultData) ctx.throw(409, "Username already exists");

        const userData = new userSchema({
            name: ctx.request.body.name,
            age: ctx.request.body.age,
            hobby: ctx.request.body.hobby,
            country: ctx.request.body.country,
            state: ctx.request.body.state,
      });

      const savingData  = await userData.save();

      if(!savingData) ctx.throw(201, "data failed to store to database");
      ctx.body = savingData;

      await next();
}

/**
 * @request GET
 * @route /users/:id
 * @description route method for result user by id
 */

exports.resultController = async (ctx, next) => {

    const resultData  = await userSchema.findById(ctx.params.id).lean();
    if(!resultData) ctx.throw(404, "User data not found or deleted");

    ctx.body = resultData;

    await next();
}

/**
 * @request DELETE
 * @route /users/:id
 * @description route method for delete user by id
 */

exports.deleteController = async (ctx, next) => {

  const resultData  = await userSchema.findById(ctx.params.id).lean();
  if(!resultData) ctx.throw(404, "User data not found or deleted"); 

  await userSchema.findOneAndDelete({_id: resultData._id});
  ctx.body = {msg: "User data deleted successfully", data: resultData};

  await next();
}

/**
 * @request PUT
 * @route /users/:id
 * @description route method for update user by id
 */

exports.updateController = async (ctx, next) => {
 
  const resultData  = await userSchema.findById(ctx.params.id).lean();
  if(!resultData) ctx.throw(404, "User not found or deleted"); 

  const updateData = await userSchema.updateOne({_id: resultData._id}, {$set: {name: ctx.request.body.name, age: ctx.request.body.age, hobby: ctx.request.body.hobby, country: ctx.request.body.country, state: ctx.request.body.state}});

  if(updateData.ok < 0) ctx.throw(500, "User data failed to updated");

  const newResultData  = await userSchema.findById(ctx.params.id).lean();
  ctx.body = {msg: "User data updated successfully", newData: newResultData};

  await next();
}