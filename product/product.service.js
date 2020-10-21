const productModel = require("./product.model");

// here we will create a module and implement crud in database

module.exports = {
    create: data => {
        return productModel.create(data);
    },
    list: () => {
        return productModel.find();
    },
    getProductById: id => {
        return productModel.findById(id);
    },
    updateProduct: (id,data) => {
        return productModel.findByIdAndUpdate(id,data);
    },
    delete: id => {
        return productModel.deleteOne({_id: id});
    }
};