const express = require('express');
const productRouter = require('./routes/productRouter');
const bookRouter = require('./routes/bookRouter');

const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON request bodies

app.use('/products', productRouter);
app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
