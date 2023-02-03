const dotenv = require('dotenv');
// const mongoose = require('mongoose');

dotenv.config();


module.exports = {
    url: process.env.MONGODB_URI,
};

// mongoose.set("strictQuery", false);