async function userLogoutController(req,res){
    try {
        res.clearCookie('token')
        res.status(200).json({
            message:'Logout successfully',
            success:true,
            error:false,
            data:[]
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
module.exports=userLogoutController
