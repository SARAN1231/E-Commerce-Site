const express = require('express')
const { getProducts, newproduct, getSingleProducts, UpdateProduct, DeleteProduct } = require('../controllers/productController')
const router = express.Router()

router.route("/products").get(getProducts)
router.route("/products/new").post(newproduct)
router.route("/products/:id").get(getSingleProducts)
router.route("/products/:id").put(UpdateProduct)
router.route("/products/:id").delete(DeleteProduct)
module.exports = router