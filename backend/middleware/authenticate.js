const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/usermodel")
const catchAsyncerror = require("./catchAsyncerror");
const jwt = require("jsonwebtoken")


exports.isAuthenticatedUser = catchAsyncerror(async (req,res,next) =>{
    const {token} = req.cookies

    if(!token){
        return next(new ErrorHandler("Login first to view this resources",401))
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    next();
})