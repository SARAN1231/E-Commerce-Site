const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true,"please enter a productname"],
        trim:true,
        maxlength:[100,'productname can not be more than 100 characters'],
     },
     price: {
         type:Number,
         default:0.0
     },
     description: {
        type:String,
        required:[true, "please enter product description"]
     },
     ratings: {
        type: Number,
        default:0
     },
     images: [
        {
            image: {
                type: String,
                required: true
            }
        }
     ],
     category: {
        type:String,
        required:[true,"please enter product category"],
        enum: {
            values:[
                'eletronics',
                'mobilephones',
                'laptop',
                'headphones',
                'accessories',
                'food',
                'clothes/shoes',
                'books',
                'beauty/health',
                'sports',
                'outdoor',
                'home'
            ],
            message:"please select valid category"
        }
     },
     seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, 'Product stock cannot exceed 20']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.Types.ObjectId
    }
    ,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})


let schema = mongoose.model('Product', productSchema)

module.exports = schema