 const jwt = require('jsonwebtoken')
async function authToken(req,res,next) {
    try {
        const token = req.cookies.token
        if(token == undefined){
            return res.status(200).json({
                message:"User not login",
                error:true,
                success:false
            })
        }
        jwt.verify(token,process.env.TOKEN_SCRET_KEY,function(err,decoded){
            if(err){
                console.log('auth err',err)
            }
            req.userId=decoded._id
            next()
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

module.exports=authToken