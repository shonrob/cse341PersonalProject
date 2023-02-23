// import mongoose from 'mongoose';
// const {Schema, model} = mongoose;

const mongoose = require('mongoose');

    const studentSchema = new mongoose.Schema ({
            firstName: {
                type: String, required: true
            },
            lastName: {
                type: String, required: true
            }, 
            enrolled: {
                type: Boolean, required: true
            }
        });

// const addStudentExample =
//     {
//         firstName: "Sarah",
//         lastName: "Doe",
//         enrolled: true

//     }

module.exports = mongoose.model("student", studentSchema, 'student'); 

