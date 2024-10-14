const productModel = require("../models/productModel")
const getCategoryProductOneController = async(req,res)=>{
    try {
        const productCategory = await productModel.distinct('category')
        console.log('category',productCategory)
        const productByCategory=[]
        for (const cat of productCategory) {
            const product = await productModel.findOne({category:cat})
            if(product){
                productByCategory.push(product)
            }
            
        }
        res.status(200).json({
            message: 'category product',
            error:false,
            data:productByCategory,
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

module.exports =getCategoryProductOneController