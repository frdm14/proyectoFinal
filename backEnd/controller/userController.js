const {Users} = require ("../models/Users")


module.exports = {

    async createUser (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const user = new Users(req.body)
                await user.save()
                res.status(201).json(user)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },

    async updateUser  (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Users.findByIdAndUpdate(req.params.id,req.body)
                res.status(201).json({msg: "el user se actualizo"})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },

    async deleteUser (req, res){
        const user = await Users.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "user eliminado"}), user
    },

    async getSingleUser (req, res) {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
    },

    async getAllUser (req, res) {
              

        const users = await Users.find({});
        res.status(200).json({users})
    },

    


}