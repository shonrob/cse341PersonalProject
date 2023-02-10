const express = require('express');
const mongoose = require('./db/mongoose');
const swaggerUI = require("swagger-ui-express");



const app = express();
// const swagger = require('./swagger');

const port = process.env.PORT || 3000;
const swaggerSpec = require('./swagger-output.json');

// const Course = require('../models/course.js');
// const Cat = mongoose.model('Cat', { name: String });
// const swaggerSchema = m2s(Cat);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.json());
app.use('/', require('./routes/index.js'));



app.listen(port, async () => {
    console.log("Server is running at port 3000!");
    try {
       const db = await mongoose.getDB();
       console.log("Connected via Mongoose");
    } catch (error) {
        console.log(error)
    }

});
