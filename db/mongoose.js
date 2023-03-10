const dotenv = require('dotenv');
dotenv.config();

// had to add for deprecation 
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

let db = null;

const connectDBString = process.env.MONGODB_URI;


async function getDB() {
    if (db == null) {
        try {
            db = await mongoose.connect(connectDBString);
            let dbConnection = mongoose.connection;
            dbConnection.once('open', () => console.log("We are connected to the db"));
            dbConnection.on('error', console.error.bind(console, 'MongoDB connection error'));
        } catch (error) {
            console.log(error)
        }
    }
    return db
}

module.exports = {getDB}

