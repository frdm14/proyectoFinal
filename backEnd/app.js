const express = require('express')
const logger = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')
const cookieParser = require ("cookie-parser")

const tourRoute = require("./routes/tours")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const reviewRoute = require("./routes/reviews")
const bookingRoute = require("./routes/booking")

const app = express()
const corsOptions = {
    origin:true,
    credentials:true,
}


const {connect} = require("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

connect();


module.exports = app