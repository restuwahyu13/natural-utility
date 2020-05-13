const {userController} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.resultsController);
router.post("/",  userController.createController);
router.get("/:id", userController.resultController);
router.delete("/:id", userController.deleteController);
  
module.exports = router;