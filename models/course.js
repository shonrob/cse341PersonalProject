
const mongoose = require('mongoose');

       const courseSchema= new mongoose.Schema({
            subject: {
                type: String, required: true
            },
            description: {
                type: String, required: true
            },
            teacherName: {
                type: String, required: true
            },
            currentGrade: {
                type: String, required: true, enum:{values: ["A", "B", "C", "D", "F"]}, message: "{VALUE} is not allowed"
            },
            assignment: {
                type: String, required: true
            },
            dueDate: {
                type: Date, required: true
            }
        });

module.exports = mongoose.model("course", courseSchema, 'course');
