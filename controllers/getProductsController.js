const uploadProductPermission = require("../helpers/permission")
const productModel = require("../models/productModel")

async function getProductsController(req,res) {
    try {
        const products = await productModel.find().sort({createdAt:-1})
        res.status(200).json({
            data:products,
            error:false,
            success:true,
            message:'Products detail'
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
module.exports = getProductsController