const catchAsyncerror = require("../middleware/catchAsyncerror")
const User = require("../models/usermodel")
const ErrorHandler = require("../utils/ErrorHandler")
const sendtoken = require("../utils/jwt")


exports.registerUser = catchAsyncerror( async (req,res,next)=> {
    const {name,email,password,avatar} = req.body
    const user = await User.create({
        name,
        email,
        password,
        avatar

    })

    sendtoken(user,201,res)
})



exports.loginUser = catchAsyncerror( async (req,res,next)=> {
    const {email,password} = req.body
    if(!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }
    //checking the user in database
    const user = await User.findOne({email}).select('+password')
    if (!user){
        return next(new ErrorHandler("Invalid Credentials", 403))
    }

    if(!await user.isValidPassword(password)){
        return next(new ErrorHandler("Invalid Credentials", 403))
    }

    sendtoken(user,201,res)
})
