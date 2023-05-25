/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/', productController.save);
router.get('/', productController.getAll);
router.delete('/:productId', productController.deleteById);
router.put('/:productId', productController.edit)

module.exports = router;