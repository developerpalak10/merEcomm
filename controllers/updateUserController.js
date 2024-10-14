const userModel = require("../models/userModel")

async function updateUserRole(req,res){
    try {
        const {userId,email,name,role} = req.body
        const sessionUser = req.userId
        const payload ={
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(role && {role:role})
        }
        const user = await userModel.findById(sessionUser)
        console.warn("user role",  user.role)
        const updateUser = await userModel.findByIdAndUpdate(userId,payload)
        res.json({
            message:"User Update Successfully",
            success:true,
            error:false,
            data:updateUser
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
module.exports = updateUserRole