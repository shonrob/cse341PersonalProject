const db = require('../models/index');
const student = db.students


const { ObjectID } = require('bson');
const ObjectID = require('mongodb').ObjectId;

async function getAllStudents (request, response) {
    const result = await student.getDbI().db("homework").collection('student').find();

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json");
        response.status(200).json(list);
    });
}

const getStudentById = async (request, response) => {
    const studentId = new ObjectId(request.params.id);
//     // getting the information from the mongo db site 
    const result = await mongodb.getDb().db("homework").collection("student").find({ _id: studentId});
    

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(list);
    });

};

// a function that will use POST 
async function createStudent (req, res, next) {
    console.log(req.body);
    const response = await mongodb.getDb().db("homework").collection("student").insertOne(req.body);
    setHeaders(res);
    if (response.acknowledged) {
        res.status(201).json(response);    
    } else {
        res.status(500).json(response.error || "Sorry, error occured when creating student");
    }    
}

// a function that will update a student by id through PUT
const updateStudent = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);

    const response = await mongodb.getDb().db("homework").collection("student").replaceOne({_id: userId}, req.body);
    console.log(response);
    setHeaders(res);
    if (response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Sorry, there was an error while updating your student.');
    }
};

const deleteStudent = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("homework").collection("student").remove({_id: userId}, true); 
    console.log(response);
    setHeaders(res);
    if (response.deletedCount > 0 ) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || "Sorry, there was an error when you tried to delete your student.");
    } 
};

function setHeaders(res) {
    res.setHeader("content-type", 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
}

module.exports = {
    getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent, setHeaders
}

// exports.create = (req, res) => {
//     if (!req.body.id) {
//         res.status(400).send({message: 'Content can not be empty'});
//         return;
//     }

// // Create Student 
// const pupil = new Pupil({
//     student_id: req.body.student_id,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     enrolled: req.body.enrolled
// });
// pupil.save(pupil).then((data) => {
//     res.send(data);
// })
// .catch((err) => {
//     res.status(500).send({
//         message:
//             err.message || 'You have an error when creating your student.',
//     });
// });
// };

// exports.findAll = (req, res) => {
//     console.log(req.header('apiKey'));
//     if (req.header('apiKey') === apiKey) {
//         Pupil.find(
//         {},
//         {
//             student_id: 1,
//             firstName: 1,
//             lastName: 1,
//             enrolled: 1,
//         }
//         ).then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || 'Error when retrieving student.',
//             });
//         });
//     } else {
//         res.send('Invalid apiKey.');
//     }
// };

