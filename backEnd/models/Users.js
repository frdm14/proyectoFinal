const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    

    role: {
        type: String,
        default: "user",
    },
    },
    
    { timestamps: true }
    );

    const Users = mongoose.model("Users", schema)
module.exports = {Users}