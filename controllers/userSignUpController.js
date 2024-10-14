const userModal = require('../models/userModel.js')
const bcrypt = require('bcryptjs');

async function userSignUpController(req,res){
    try {
        const {email,password,name}= req.body
        if(!email){
            throw new Error("please provide email")
        }
        if(!password){
            throw new Error("please provide password")
        }
        if(!name){
            throw new Error("please provide name")
        }
        const user = await userModal.findOne({email})
        if(user){
            throw new Error("Already User exits")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("something went wrong")
        }
        const payload = {
            ...req.body,
            role:"general",
            password:hashPassword
        }
        const userData = new  userModal(payload)
        const saveUserData = await userData.save()
        res.status(201).json({
            data:saveUserData,
            success:true,
            error:false,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            error:true,
            success:false
        })
    }
}

module.exports=userSignUpController