const {userController} = require("../controllers/user.controller");

module.exports = function(router) {
      return [
        router.get("/", userController.resultsController),
        router.post("/",  userController.createController),
        router.get("/:id", userController.resultController),
        router.delete("/:id", userController.deleteController)
      ]
}
