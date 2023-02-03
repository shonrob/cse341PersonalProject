const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        enrolled: Boolean
    },
    { timestamps: true}

);

const students = mongoose.model("students", studentSchema);

const courseSchema = new mongoose.Schema(
    {
        courseId: Number,
        subject: String,
        description: String,
        teacherName: String,
        currentGrade: String,
        assignment: String,
        dueDate: Date
    },
    { timestamps: true}

);

const courses = mongoose.model("courses", courseSchema);

module.exports = students, courses;