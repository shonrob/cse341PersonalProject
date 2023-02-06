const express = require('express');
const mongoose = require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', require('./routes/course'));
app.use('/', require('./routes/student'));


app.listen(port, async () => {
    console.log("Server is running at port 3000!");
    try {
       const db = await mongoose.getDB();
       console.log("Connected via Mongoose");
    } catch (error) {
        console.log(error)
    }

});
