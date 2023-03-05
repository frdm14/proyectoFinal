const {Users} = require ("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
async register (req, res){
    try {
        
        const salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save();
        res.status(200).json({msg:"creado satisfactoriamente"})
        
        } catch (error) {
            res.status(500).json({msg:"fallo al crear"})
    }
},


    login : async (req, res)=> {
        const email = req.body.email
    try {
        const user = await Users.findOne({email})

        if (!user) {
            return res.status(404).json({msg:"usuario no encontrado"})
    } 
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)
    
    if (!checkCorrectPassword) {
        return res.status(401).json({msg:"email o password incorrecto"})
    }

    const {password, role, ...rest} = user._doc

    const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn: "14d"});
 
    res.cookie("accesToken", token, {
        httpOnly: true,
        expires:token.expiresIn
    }).status(200).json({ token, msg:"login satisfactorio", data:{...rest}, role})

}catch (error) {
        res.status(500).json({msg:"Fallo al loguearse"});
    }
},
}

