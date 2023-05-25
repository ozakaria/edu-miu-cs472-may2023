/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/placeOrder', orderController.placeOrder);

module.exports = router;