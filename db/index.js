const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(`Successfully connected to MongoDB`);
  })
  .catch((e) => {
    console.error(`Connection error`, e.message);
  });

const db = mongoose.connection;

module.exports = db;