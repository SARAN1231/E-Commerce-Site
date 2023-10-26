const Product = require('../models/productmodel')

exports.getProducts = (req,res,next) => {
      res.status(200).json({
        success:true,
        message:"this will show all routes in database"
      })
}


//create product --> api/v1/products/new
exports.newproduct = async (req,res,next) =>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}
