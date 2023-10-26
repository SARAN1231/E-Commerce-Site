const express = require('express')
const { getProducts, newproduct } = require('../controllers/productController')
const router = express.Router()

router.route("/products").get(getProducts)
router.route("/products/new").post(newproduct)
module.exports = router