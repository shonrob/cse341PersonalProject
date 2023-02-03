const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        studentId: Number,
        firstName: String,
        lastName: String,
        enrolled: Boolean
    },
    { timestamps: true}

);

const students = mongoose.model("students", studentSchema);

module.exports = students;