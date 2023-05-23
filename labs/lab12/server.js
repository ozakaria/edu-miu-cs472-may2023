const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require("./routers/userRouter");
const productsRouter = require("./routers/productRouter");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// 404 Not Found handling middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'error404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
