const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology : true, useNewUrlParser : true});


var connection = mongoose.connection;

connection.on('error', () => {
  console.log('MongoDB Connection failed');
});

connection.on('connected', () => {
  console.log('MongoDB connection successful');
});

module.exports = mongoose;
