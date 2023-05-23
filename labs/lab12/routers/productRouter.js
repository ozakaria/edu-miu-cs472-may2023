const express = require("express");
const productController = require("../controllers/productsController");

const router = express.Router();

router.post('/', productController.addProduct);
router.get('/', productController.getProducts);

module.exports = router;
