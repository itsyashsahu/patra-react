const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    watchlist:{
        type: Array,
        properties: [{
            stockName :{
                type:String,
                unique:true,
            },
            stockSymbol :{
                type:String,
                unique:true,
            }
        }]
    },
    createdAt:{
        type:Date,
        default: () => Date.now(),
         immutable:true
    },
    updatedAt:{
        type:Date,
        default: () => Date.now(),
    },
    
})

module.exports = mongoose.model('User',userSchema )