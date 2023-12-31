const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter name']
    },
    email:{
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        maxlength: [6, 'Password cannot exceed 6 characters'],
        select: false
    },
    avatar: {
        type: String
    },
    role :{
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
    createdAt :{
        type: Date,
        default: Date.now
    }
})
userSchema.pre('save', async function(next) {
    this.password= await bcrypt.hash(this.password,10)

})

userSchema.methods.getJWTtoken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET ,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}
userSchema.methods.isValidPassword = async function(enteredpassword) {
    return await bcrypt.compare(enteredpassword,this.password)
}

let model =  mongoose.model('User', userSchema);


module.exports = model;