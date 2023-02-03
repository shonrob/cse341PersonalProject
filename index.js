const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');
const dbConfig = require('./db/connect');


const app = express();
const port = process.env.PORT || 3000;

// app.use('/', require('./routes/index'));
app.use(express.json());
app.use(Router);

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'There was a connection Error: '));
db.once('open', function () {
    console.log("Connection was successful!");
});

app.listen(port, () => {
    console.log("Server is running at port 3000!");
});
