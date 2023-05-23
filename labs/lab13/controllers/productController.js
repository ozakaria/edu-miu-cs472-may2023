const Product = require('../models/product');

exports.save = (req, res, next) => {
    const addedProd = new Product(req.body.title, req.body.description, req.body.price);
    addedProd.save();
    res.status(201).json(addedProd);
};

exports.getAll = (req, res, next) => {
    const allProducts = Product.getAll();
    res.status(200).json(allProducts);
};

exports.deleteById = (req, res, next) => {
    const deletedProduct = Product.deleteById(req.params.productId);
    res.json(deletedProduct);
};

exports.edit = (req, res) => {
    const editedProduct = new Product(req.params.productId, req.body.title, req.body.description, req.body.price);
    editedProduct.edit();
    res.json(editedProduct);
};
