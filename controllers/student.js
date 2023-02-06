// const {ObjectId} = require('bson');
const ObjectId = require('mongodb').ObjectId;
const { default: mongoose } = require('mongoose');

const Student = require('../models/student');



async function getAllStudents (request, response) {
    const result = await Student.find();
    
    response.setHeader("Content-Type", "application/json");
    response.status(200).json(result);

}

const getStudentById = async (request, response) => {
    const studentId = new ObjectId(request.params.id);
    console.log(studentId);
    console.log(request.params.id);
    try {
        const result = await Student.find({_id: studentId});
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(result);
    } catch (error) {
        response.setHeader("Content-Type", "text/plain")
        response.status(404).send('Student Not Found');
    }
};

const createStudent = async (req, res, next) => {
    // console.log(req.body);
    try {
        const student = new Student(req.body);

        try {
            await student.save();
            return res.status(201).json(student);
            console.log(student);         
        } catch (error) {
            setHeaders(res, contentText);
            res.status(402).json(error);
            return;
        }  

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Student Not Found');
    }
    
}

module.exports = {getAllStudents, getStudentById, createStudent}


// // a function that will update a student by id through PUT
// const updateStudent = async (req, res, next) => {
//     const studentId = new ObjectId(req.params.id);
//         student.replaceOne({_id: studentId}, req.body);
//     // const response = await mongodb.getDb().db("homework").collection("student").replaceOne({_id: userId}, req.body);
//     console.log(response);
//     setHeaders(res);
//     if (response.modifiedCount > 0){
//         res.status(204).send();
//     } else {
//         res.status(500).json(response.error || 'Sorry, there was an error while updating your student.');
//     }
// };

// const deleteStudent = async (req, res, next) => {
//     const studentId = new ObjectId(req.params.id);
//         student.deleteOne({_id: studentId}, true); 
//         // student.remove({_id: studentId}, true); 
//     // const response = await mongodb.getDb().db("homework").collection("student").remove({_id: userId}, true); 
//     console.log(response);
//     setHeaders(res);
//     if (response.deletedCount > 0 ) {
//         res.status(200).send();
//     } else {
//         res.status(500).json(response.error || "Sorry, there was an error when you tried to delete your student.");
//     } 
// };

// function setHeaders(res) {
//     res.setHeader("content-type", 'application/json');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
// }

// module.exports = {
//     getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent, setHeaders
// }



