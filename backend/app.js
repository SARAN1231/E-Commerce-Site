const express = require('express')
const app = express()
const products = require('./routes/product')
const errorMiddleWare = require('./middleware/error')


app.use(express.json())
app.use("/api/v1" , products)
app.use(errorMiddleWare)
module.exports = app

