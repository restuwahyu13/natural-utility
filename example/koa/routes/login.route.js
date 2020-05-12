const {loginController} = require("../controllers/login.controller");
const router =  new Router();
  
router.post("/", loginController);
  
module.exports = router;