const path = require("path");

exports.getProducts = (req, res, next) => {
    const productPath = path.join(__dirname, '..', 'public', 'products.html');
    res.sendFile(productPath);
};

exports.addProduct = (req, res, next) => {
    const { id, name } = req.body;
    const product = {
        id: id,
        name: name
    };
    res.status(200).json(product);
};
