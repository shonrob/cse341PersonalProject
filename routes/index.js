const express = require('express');
const UserModel = require('../models/index');
const app = express();


app.get('/students', async (request, response) =>{
    const student = await userModel.find({});

    try {
        response.send(student);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post('/add_student', async (request, response) => {
    const student = new userModel(request.body);

    try {
        await student.save();
        response.send(student);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;

