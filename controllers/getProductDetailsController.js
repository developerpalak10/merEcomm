const productModel = require("../models/productModel")

const getProductDetailsController = async(req,res)=>{
    try {
        const {productId} = req?.body || req?.query
        const product = await productModel.findById(productId)
        res.json({
            data:product,
            message:'Ok',
            success:true,
            error:false
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
module.exports=getProductDetailsController