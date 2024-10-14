const uploadProductPermission = require("../helpers/permission")
const productModel = require("../models/productModel")

async function uploadProductController(req,res) {
    try {
        const sessionUserId = req.userId
        if(uploadProductPermission(sessionUserId) =='false'){
            throw new Error("Permission denied")
        }
        const product = new productModel(req.body)
        const saveProduct = await product.save()
        res.status(201).json({
            message: 'Product Upload Successfully',
            error:false,
            data:saveProduct,
            success:true
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
module.exports = uploadProductController