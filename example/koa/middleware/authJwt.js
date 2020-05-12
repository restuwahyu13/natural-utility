const userSchema = require("../models/user.model");

module.exports =  async (ctx, next) => {

  const tokenHeader = ctx.request.headers.authorization.split("Bearer ")[1];
  if(!tokenHeader) ctx.throw(400, "Token is required, your give empty token"); 
 
  try {
    const decodeToken = await jwt.verify(tokenHeader, "37168176663163344");

    const userData = await userSchema.findOne({_id: decodeToken._id});
    ctx.state.user = userData;
    await next();
  
   }catch(err) {
      ctx.throw(401, "Autorization failed, because token invalid or expired");
   }
}