require('dotenv').config();

//async-error

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/productsRoutes');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h3>store API</h3> <a href="/api/v1/products">Products<a/>');
});
app.use('/api/v1/products', productsRouter);

// products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
