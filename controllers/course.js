const db = require('../models/index)');
const course = db.courses

const { ObjectID } = require('bson');
const ObjectID = require('mongodb').ObjectId;

async function getAllCourses (request, response) {
    const result = await student.getDbI().db("homework").collection('course').find();

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json");
        response.status(200).json(list);
    });
}

const getCourseById = async (request, response) => {
    const studentId = new ObjectId(request.params.id);
//     // getting the information from the mongo db site 
    const result = await mongodb.getDb().db("homework").collection("course").find({ _id: courseId});
    

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(list);
    });

};

// a function that will use POST 
async function createCourse (req, res, next) {
    console.log(req.body);
    const response = await mongodb.getDb().db("homework").collection("course").insertOne(req.body);
    setHeaders(res);
    if (response.acknowledged) {
        res.status(201).json(response);    
    } else {
        res.status(500).json(response.error || "Sorry, error occured when creating course");
    }    
}

// a function that will update a student by id through PUT
const updateCourse = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);

    const response = await mongodb.getDb().db("homework").collection("course").replaceOne({_id: userId}, req.body);
    console.log(response);
    setHeaders(res);
    if (response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Sorry, there was an error while updating the course.');
    }
};

const deletecourse = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("homework").collection("course").remove({_id: userId}, true); 
    console.log(response);
    setHeaders(res);
    if (response.deletedCount > 0 ) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || "Sorry, there was an error when you tried to delete this course.");
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
    getAllCourses, getCourseById, createCourse, updateCourse, deletecourse, setHeaders
}

// exports.create = (req, res) => {
//     if (!req.body.id) {
//         res.status(400).send({message: 'Content can not be empty'});
//         return;
//     }

// // create course 
// const course = new Course({
//     subject: req.body.subject,
//     description: req.body.description,
//     teacherName:  req.body.teacherName,
//     currentGrade: req.body.currentGrade,
//     assignment: req.body.notes, 
//     dueDate: req.body.dueDate,
//     favorite: req.body.favorite 

// });
// course.save()    
// }