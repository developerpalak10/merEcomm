const bcrypt = require('bcryptjs')
const userModal = require('../models/userModel.js')
const jwt = require('jsonwebtoken');
async function userSignInController(req,res){
    try {
        const {email,password} = req.body
        if(!email){
            throw new Error("please provide email")
        }
        if(!password){
            throw new Error("please provide password")
        }
        const user = await userModal.findOne({email})
        if(!user){
            throw new Error("User not exit")
        }
        const chkPassword= await bcrypt.compare(password,user.password);
        if(chkPassword){
            const tokenData = {
                _id:user._id,
                email:user.email
            }
            const tokenOption= {
                httpOnly:true,
                secure:true
            }
            const token =await jwt.sign(tokenData, process.env.TOKEN_SCRET_KEY, { expiresIn: '8h' });
            res.cookie('token',token,tokenOption).json({
                message:"Login Successfully",
                data:tokenData,
                success:true,
                error:false
            })
        }else{
            throw new Error("please enter correcr password") 
        }

    } catch (error) {
        res.json({
            message: error.message || error,
            error:true,
            success:false
        })
    }
}

module.exports=userSignInController