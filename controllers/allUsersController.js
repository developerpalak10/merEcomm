const userModel = require("../models/userModel")
async function allUsersController(req,res){
    try {
        const users = await userModel.find().select('-password')
        res.status(200).json({
            data:users,
            error:false,
            success:true,
            message:'user detail'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error:true,
            data:[],
            success:false
        }) 
    }
}
module.exports= allUsersController