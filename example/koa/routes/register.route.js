const {registerController} = require("../controllers/register.controller");
const router =  new Router();
  
router.post("/register", registerController);
  
module.exports = router;