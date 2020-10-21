const express = require("express");
const app = express();
const DB = require("./config/databse");
const productModel = require("./product/product.model");
const router = require("./product/product.route");
require("dotenv").config();

DB();

app.get("/", (req, res) => {
    res.json({
        success: 1,
        message: "Listening......"
    })
})

//we will parse json
app.use(express.json());

// here we will use router to post the data
app.use("/api/p",router);

app.get("/api/products", function(req,res) {
    productModel.find().then((data)=>{
        res.json(data)
    })
})

app.listen(process.env.PORT, () => {
    console.log("Server is running at port " + process.env.PORT)
})