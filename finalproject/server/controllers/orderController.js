/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

const { Product } = require('../models/product');

exports.placeOrder = (req, res, next) => {
  const cart = req.body;
  const invalidProducts = [];
  const pDB = Product.getAll();

  cart.forEach((productInCart) => {
    const productInDB = pDB.find((prod) => prod.id === productInCart.id);
    if (!productInDB || productInCart.quantity > productInDB.stock) {
      invalidProducts.push(productInCart);
    }
  });

  if (invalidProducts.length > 0) {
    res.status(400).json({
      message: 'The following products are invalid or out of stock',
      invalidProducts,
    });
  } else {
    // all products in cart are valid, so process the order
    cart.forEach((productInCart) => {
      const productInDB = pDB.find((prod) => prod.id === productInCart.id);
      productInDB.stock -= productInCart.quantity;
      productInDB.edit();
    });

    res.status(200).json({ message: 'Order placed successfully' });
  }
}

