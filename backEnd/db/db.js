const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("conectado a la base de datos")
    } catch  {
        console.log("problemas al conectarse con la base de datos")
    }
}

module.exports = {connect}