const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema(
{
    userId: {
    type: String
    },
    userEmail: {
    type: String,
    },
    tourName:{
        type: String,
        required: true
    },
    fullName: {
    type: String,
    required: true,
    },
    amount: {
        type: Number,
        required: true,
        },
    phone: {
    type: Number,
    required: true,
    },
    bookAt: {
    type: Date,
    require:true
    },
},
    { timestamps: true }
);

const Booking = mongoose.model("Booking", schema)
module.exports = {Booking}
