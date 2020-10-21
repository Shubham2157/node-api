const productService = require("./product.service");

module.exports = {
    create:(req,res)=> {
        const body = req.body;
        productService.create(body).then(result => {
            if(result){
                res.json({
                    success:1,
                    message:"Data inserted Successfully...",
                    data: result
                })
            }else{
                res.json({
                    success:0,
                    message:"Failed to insert Data..."
                })
            }
        })
    }
}