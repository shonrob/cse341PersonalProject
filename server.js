const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL

const express = require('express');
const mongoose = require('./db/mongoose');
const swaggerUI = require("swagger-ui-express");
// const m2s = require('mongoose-to-swagger');


const app = express();
// const swagger = require('./swagger');

// const courseSchema = m2s('../models/course.js');
// const studentSchema = m2s('../models/student.js');

const port = process.env.PORT || 3000;
const swaggerSpec = require('./swagger-output.json');

// swaggerSpec.definitions.course = courseSchema;
// swaggerSpec.definitions.student = studentSchema;
// const Course = require('../models/course.js');
// const Cat = mongoose.model('Cat', { name: String });
// const swaggerSchema = m2s(Cat);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.json());
app.use(auth(config));
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
