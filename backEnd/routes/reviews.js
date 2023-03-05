const express = require("express")
const router = express.Router()
const Controller = require ("../controller/reviewController")
const {verifyUser} = require("../middlewares/verifyToken")


router.post("/:tourId",  Controller.createReview)

module.exports = router