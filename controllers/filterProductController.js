const productModel = require("../models/productModel")

async function filterProductController (req,res) {
    try {
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
        })
        res.status(200).json({
            data:product,
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
module.exports = filterProductController 