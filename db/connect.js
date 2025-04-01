const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    // all of the following sends depracted message, so commented out
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
