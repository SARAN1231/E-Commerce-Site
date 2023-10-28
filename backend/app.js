const express = require('express')
const app = express()
const products = require('./routes/product')
const errorMiddleWare = require('./middleware/error')
const auth = require("./routes/auth")
const cookieparser = require("cookie-parser")
app.use(express.json())
app.use(cookieparser)
app.use("/api/v1" , products)
app.use("/api/v1" , auth)
app.use(errorMiddleWare)
module.exports = app

