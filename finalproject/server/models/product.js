/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

let db = [];
let counter = 0;

const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '..', 'images'); // path to your images directory


class Product {

    constructor(id, title, description, price, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    save() {
        this.id = ++counter; //start with 1;
        db.push(this);
        return this;
    }

    edit() {
        const index = db.findIndex(prod => prod.id == this.id);
        db.splice(index, 1, this); const { Product } = require('../models/product');

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
        return this;
    }

    static getAll() {
        return db;
    }

    static deleteById(prodId) {
        const index = db.findIndex(prod => prod.id == prodId);
        const deletedProd = db[index];
        db.splice(index, 1);
        return deletedProd;
    }

}

// function to read an image file and encode it as base64 string
function encodeImageFileAsBase64(filePath) {
    const file = fs.readFileSync(filePath);
    return Buffer.from(file).toString('base64');
}

let p11 = new Product(11, "NodeJS", "firstDescription", 9.99, 8).save();
let p22 = new Product(22, "React", "secondDescription", 19.99, 5).save();
let p33 = new Product(33, "Angular", "thirdDescription", 29.99, 13).save();
// let p44 = new Product(44,"fourthTitle","fourthDescription",1,2).save();

// loop through the products and add base64-encoded image data
for (const product of Product.getAll()) {
    const imageFileName = `${product.id}.jpg`; // assuming image file names are the same as product IDs
    const imageFilePath = path.join(imagePath, imageFileName);
    product.image = 'data:image/jpeg;base64,' + fs.readFileSync(imageFilePath, { encoding: 'base64' })
}

module.exports = {
    Product
};