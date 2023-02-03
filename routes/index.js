const express = require('express');
const UserModel = require('../models/index');
const app = express();


app.post('/add_students', async (request, response) =>{
    const student = await studentModel(request.body);

    try {
        await student.save();
        response.send(student);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get('/students', async (request, response) => {
    const student = await studentModel.find({});

    try {
        response.send(student);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;

