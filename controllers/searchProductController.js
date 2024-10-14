const productModel = require("../models/productModel")
const searchProductController = async(req,res)=>{
    try {
        const query = req.query.q 

        const regex = new RegExp(query,'i','g')
        console.log('reg',regex)
        const product = await productModel.find({
            "$or" : [
                {
                    productName : regex
                },
                {
                    category : regex
                }
            ]
        })
        console.log('searched product ',product)

        res.json({
            data  : product ,
            message : "Search Product list",
            error : false,
            success : true
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
module.exports = searchProductController