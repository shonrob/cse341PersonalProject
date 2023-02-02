const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require('./db/connect');

app.use('/', require('./routes/index'));

mongodb.initDB((error, mongodb) => {
    if (error) console.log(ERROR)
    else {
        app.listen(port)
        console.log("Listening on Port 3000");
    }
})