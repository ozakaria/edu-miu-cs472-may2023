/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

const { Product } = require('../models/product');

exports.save = (req, res, next) => {
    const addedProd = new Product(null, req.body.title, req.body.description, req.body.price).save();
    res.status(201).json(addedProd);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}

exports.deleteById = (req, res, next) => {
    res.json(Product.deleteById(req.params.productId));
}

exports.edit = (req, res) => {
    const editedProd = new Product(req.params.productId, req.body.title, req.body.description, req.body.price).edit();
    res.json(editedProd);
}