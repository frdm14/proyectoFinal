const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema(
{
    productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
    },
    username: {
    type: String,
    /*required: true,*/
    },
    reviewText: {
    type: String,
    required: true,
    },
    rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    default: 0,
    },
},
    { timestamps: true }
);

const Reviews = mongoose.model("Reviews", schema)
module.exports = {Reviews}
