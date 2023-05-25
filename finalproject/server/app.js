/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

const express = require('express');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const { Product } = require('./models/product');

const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json()); //req.body = {...}

let db = [
    { id: 1, username: 'ahmed', password: 'ahmed' },
    { id: 2, username: 'yusuf', password: 'yusuf' },
    { id: 3, username: 'admin', password: 'admin' },
    { id: 4, username: 'osama', password: 'osama' }
];

app.post('/login', (req, res, next) => {
    const user = db.find(user => user.username === req.body.username && user.password === req.body.password);
    if (user) {
        res.json({ accessToken: `${user.id}-${user.username}-${Date.now().toString()}` })
    } else {
        res.json({ error: 'Invalid username and password!' });
        // throw new Error('dfdfdf');
    }
});

app.use('/products', productRouter);

app.use('/order', orderRouter);

app.use('*', (res, req, next) => {
    throw new Error("Error occured");
});

app.use((error, req, res, next) => {
    res.status(404).send(new Error("This is error"))
});

app.listen(3000, () => console.log('listen on 3000'));