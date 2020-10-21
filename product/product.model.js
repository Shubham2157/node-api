const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
});
// here we are creating collection and adding product detail to that collection of mongodb
const Product = mongoose.model("product", productSchema);

module.exports = Product;