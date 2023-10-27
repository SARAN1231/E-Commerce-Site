const Products = require('../data/products.json')
const Product = require('../models/productmodel')
const connectDatabase = require('../config/database')
const dotenv = require('dotenv')

dotenv.config({path:"backend/config/config.env"})
connectDatabase();
const seedProducts = async() => {
    try{
        await Product.deleteMany()
        console.log("all products deleted");
        await Product.insertMany(Products)
        console.log("new products added")
    }catch(err) {
        console.log(err.message)
    }
         process.exit()
    }
seedProducts();