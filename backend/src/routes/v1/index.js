const express = require("express");
const router = express.Router();

const { user_cont } = require("../../controllers/index");
router.post("/createUser", user_cont.createUserController);
router.get("/getAllUser", user_cont.getAllUserController);
router.get("/getUser/:id", user_cont.getUserController);
router.patch("/updateUser", user_cont.updateUserController); // req.query.id
router.delete("/deleteUser", user_cont.deleteUserController); // req.query.id
// router.patch("/updateUser/:id", user_cont.updateUserController); when in req.params.id

router.get("/");
module.exports = router;
