// Load environment variables from the .env file
require('dotenv').config();

// Import the function to connect to the MongoDB database
const connectDB = require('./db/connect');

// Import the Mongoose model for the 'Product' collection
const product = require('./models/productModels');

// Import the JSON file containing product data
productsJson = require('./products.json');

// Define an asynchronous function to start the database operations
const start = async () => {
  try {
    // Connect to MongoDB using the URI from the environment variables
    await connectDB(process.env.MONGO_URI);

    // Delete all existing documents in the 'Product' collection
    await product.deleteMany();

    // Insert new product data from the JSON file into the database
    await product.create(productsJson);

    // Log success message to the console
    console.log('Operation is successful');

    // Exit the process with a success code (0)
    process.exit(0);
  } catch (error) {
    // Log any errors that occur
    console.log(error);

    // Exit the process with an error code (1)
    process.exit(1);
  }
};

// Call the start function to execute the script
start();
