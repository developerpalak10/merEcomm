const addToCartModel = require("../models/cartProduct")
const addToCartViewProductController = async(req,res)=>{
    try{

        const currentUser = req.userId
         console.log("CurrentUser",req.userId)
        const allProduct = await addToCartModel.find({
            userId : currentUser
        }).populate("productId")

        return res.json({
            data : allProduct,
            message : "Added Cart Products",
            success : true,
            error : false
        })
        

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}
module.exports =addToCartViewProductController