const Product = require('../models/productmodel')
const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncerror = require("../middleware/catchAsyncerror")

//get product --> api/v1/products
exports.getProducts =async(req,res,next) => {
    const products =  await Product.find();
      res.status(200).json({
        success:true,
        count:products.length,
        products
      })
}


//create product --> api/v1/products/new
exports.newproduct =async (req,res,next) =>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}


//get single product --> api/v1/products/:id(get req)
exports.getSingleProducts = async (req,res,next) => {
 
 
  let product = await Product.findById(req.params.id)
  if(!product){
    return res.status(404).json({ 
      success:false,
      message:'No valid entry found for this ID'})
    }
    
    res.status(201).json({
      success: true,
      product
    })}

//Update product --> api/v1/products/:id(put req)
exports.UpdateProduct = async(req,res,next)=>{
  let product = await Product.findById(req.params.id)
  if(!product){
    return res.status(404).json({ 
      success:false,
      message:'No valid entry found for this ID'})
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body, {
      new:true,
      runValidators:true
    })
    res.status(200).json({
      success: true,
      product
    })
}

//Delete product --> api/v1/products/:id(Delete req)
exports.DeleteProduct = async (req,res,next) => {
  let product = await Product.findById(req.params.id)
  if(!product){
    return res.status(404).json({ 
      success:false,
      message:'No valid entry found for this ID'})
    }
    await product.deleteOne()

    res.status(200).json({
      success: true,
      message:"product Deleted"
    })
}
  