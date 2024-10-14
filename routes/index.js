const express = require('express')

const router = express.Router();
const userSignUpController = require('../controllers/userSignUpController.js')
const userSignInController = require('../controllers/userSignInController.js');
const userDetailsController = require('../controllers/userDetailsController.js');
const authToken = require('../middleware/authToken.js');
const userLogoutController = require('../controllers/userLogoutController.js');
const allUsersController = require('../controllers/allUsersController.js');
const updateUserController = require('../controllers/updateUserController.js');
const uploadProductController = require('../controllers/uploadProductController.js');
const getProductsController = require('../controllers/getProductsController.js');
const updateProductController = require('../controllers/updateProductController.js');
const getCategoryProductOneController = require('../controllers/getCategoryProductOneController.js');
const getCategoryWiseProductController = require('../controllers/getCategoryWiseProductController.js');
const getProductDetailsController = require('../controllers/getProductDetailsController.js');
const addToCartController = require('../controllers/addToCartController.js');
const countAddToCartProductController = require('../controllers/countAddToCartProductController.js');
const addToCartViewProductController = require('../controllers/addToCartViewProductController.js');
const updateAddToCartProduct = require('../controllers/updateAddToCartProductController.js')
const deleteAddToCartProduct = require('../controllers/deleteAddToCartProductController.js')
const searchProductController = require('../controllers/searchProductController.js')
const filterProductController = require('../controllers/filterProductController.js')
router.post('/signup',userSignUpController)
router.post('/signin',userSignInController)
router.get('/user-details',authToken,userDetailsController)
router.get('/logout',userLogoutController)
router.get('/search',searchProductController)
// Admin routes

router.get('/all-users',authToken,allUsersController)
router.post('/update-user',authToken,updateUserController)

router.post('/upload-product',authToken,uploadProductController)
router.get('/all-products',authToken,getProductsController)
router.post('/update-product',authToken,updateProductController)
router.get('/get-categoryproduct',getCategoryProductOneController)
router.post('/category-product',getCategoryWiseProductController)
router.post('/product-details',getProductDetailsController)
router.post("/addtocart",authToken,addToCartController);
router.get("/countAddToCartProduct",authToken,countAddToCartProductController)
router.get("/view-cart-product",authToken,addToCartViewProductController)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
router.post("/filter-product",filterProductController)
module.exports=router