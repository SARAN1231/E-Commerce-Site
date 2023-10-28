const express = require('express')
const { getProducts, newproduct, getSingleProducts, UpdateProduct, DeleteProduct } = require('../controllers/productController')
const { isAuthenticatedUser } = require('../middleware/authenticate')
const router = express.Router()

router.route("/products").get( isAuthenticatedUser, getProducts)
router.route("/products/new").post(newproduct)
router.route("/products/:id").get(getSingleProducts)
router.route("/products/:id").put(UpdateProduct)
router.route("/products/:id").delete(DeleteProduct)
module.exports = router