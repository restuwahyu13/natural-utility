const {resultsController, createController, resultController,
deleteController, updateController} = require("../controllers/user.controller");
const router =  new Router();
const authJwt = require("../middleware/authJwt");

router.get("/user", authJwt, resultsController);
router.post("/user", authJwt, createController);
router.get("/user/:id", authJwt, resultController);
router.delete("/user/:id", authJwt, deleteController)
router.put("/user/:id", authJwt, updateController);

module.exports = router;
