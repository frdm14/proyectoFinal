const express = require("express")
const router = express.Router()
const Controller = require ("../controller/userController")




router.put("/:id", Controller.updateUser);
router.delete("/:id",  Controller.deleteUser);
router.get("/:id",  Controller.getSingleUser);
router.get("/",  Controller.getAllUser);

module.exports = router