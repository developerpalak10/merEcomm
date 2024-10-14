const uploadProductPermission = require("../helpers/permission")
const productModel = require("../models/productModel")

async function updateProductController(req,res) {
    try {
        if(uploadProductPermission(req.userId) =='false'){
            throw new Error("Permission denied")
        }
        const { _id, ...resBody} = req.body

        const updateProduct = await productModel.findByIdAndUpdate(_id,resBody)
        res.status(201).json({
            message: 'Product Updated Successfully',
            error:false,
            data:updateProduct,
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
module.exports = updateProductController