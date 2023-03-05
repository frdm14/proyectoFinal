const {Destinos} = require("../models/Destinos")

const validarID = async(req, res, next)=>{
    try {
        const item = await Destinos.findById(req.params.id)
        if (item !== null) {
            next()
        }   
        } catch (error) {
            res.status(500).json({msg: "el id es invalido"})
    } 
}

module.exports = {validarID}
