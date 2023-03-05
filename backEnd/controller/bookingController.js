const {Booking} = require ("../models/Booking")


module.exports ={
    async createBooking (req,res){

        const newBooking = new Booking(req.body)

        try {
            const savedBooking = await newBooking.save()
            res.status(200).json({msg:"reserva realizada", data:savedBooking})
        } catch (error) {
            res.status(500).json({msg:"Error de servidor"})
        }
    },

    async getBooking (req,res){
        try {
            const book = await Booking.findById(req.params.id)
            res.status(200).json({msg:"reserva realizada", data:book})
        } catch (error) {
            res.status(404).json({msg:"reserva no encontrada"})
        }
},

async getAllBooking (req,res){
    try {
        const book = await Booking.find()
        res.status(200).json({msg:"reservas realizadas", data:book})
    } catch (error) {
        res.status(404).json({msg:"reserva no encontrada"})
    }
}
}

