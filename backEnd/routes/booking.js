const express = require("express")
const router = express.Router()
const Controller = require ("../controller/bookingController")


router.post("/",  Controller.createBooking)
router.get("/:id",  Controller.getBooking)
router.get("/", Controller.getAllBooking)

module.exports = router