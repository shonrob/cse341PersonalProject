const express = require('express');
const mongoose = require('./db/mongoose');
const swaggerUI = require("swagger-ui-express");



const app = express();
// const swagger = require('./swagger');

const port = process.env.PORT || 3000;
const swaggerSpec = require('./swagger-output.json');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
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
