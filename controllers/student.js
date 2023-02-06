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
        const result = await student.find({_id: studentId});
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(result);
    } catch (error) {
        response.setHeader("Content-Type", "text/plain")
        response.status(404).send('Student Not Found');
    }
};

const createStudent = async (req, res, next) => {
    console.log(req.body);
    try {
        const student = new student(req.body);
        
        try {
            await student.save();
            console.log("hello");  
            console.log(student);         
        } catch (error) {
            setHeaders(res, contentText);
            res.status(402).json(error);
            return;
        }

        setHeaders(res);
        res.status(201).json(student);    

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Student Not Found');
    }
    
}

module.exports = {getAllStudents, getStudentById, createStudent}
// exports.createStudent( async (request, response) => {
//     student = new studentModel(request.body);
//         try {
//             await student.save();
//             response.send(student);
//         } catch (error) {
//             response.status(500).send(error);
//         }
// }); 

// exports.getAllStudents = (req, res) => {
//     if (req.header('') === ){
//         student.find({}, {
//             firstName: 1,
//             lastName: 1,
//             enrolled: 1,
//             _id: 0
//         }).then((data) =>{
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || 'An error when retriving student.',
//             });
//         });
//     } else {
//         res.send('Invalid apiKey.');
//     }
// };

// exports.getAllStudents = (req, res) => {
//     student.find({}).then((data) => {
//         res.send(data);
//     })
//     .catch((err) => {
//         res.status(500).send({
//             message: err.message || 'An error occurred while retriving the students.'
//         });
//     });
// };







// function getAllStudents (request, response) {
//     student.find({}).then, (err, result) => {
//         if (err) {
//             return (err);
//         }else {
//             response.setHeader("Content-Type", "application/json");
//             response.status(200).json(result);
//         }
//     }
        
//         // result.toArray().then(list => {

//     // });
// }

// const getStudentById = async (request, response) => {
//     const studentId = new ObjectId(request.params.id);
// //     // getting the information from the mongo db site 
//     const result = await student.find({ _id: studentId});
    

//     result.toArray().then(list => {
//         response.setHeader("Content-Type", "application/json")
//         response.status(200).json(list);
//     });

// };

// // a function that will use POST 
// async function createStudent (req, res, next) {
//     console.log(req.body);
//     const newStudent = new student(req.body);
//     newStudent.save();
//     // const response = await mongodb.getDb().db("homework").collection("student").insertOne(req.body);
//     setHeaders(res);
//     if (response.acknowledged) {
//         res.status(201).json(response);    
//     } else {
//         res.status(500).json(response.error || "Sorry, error occured when creating student");
//     }    
// }

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



