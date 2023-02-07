const { default: mongoose } = require('mongoose');
const { create } = require('../models/course.js');
// const {ObjectId} = require('bson');
const ObjectId = require('mongodb').ObjectId;


const Course = require('../models/course.js');


async function getAllCourses (request, response) {
    const result = await Course.find();
    
    response.setHeader("Content-Type", "application/json");
    response.status(200).json(result);

}

const getCourseById = async (request, response) => {
    // console.log(request.params.id);
    const courseId = new ObjectId(request.params.id);
    console.log(courseId);
    console.log(request.params.id);
    try {
        const result = await Course.find({_id: courseId});
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(result);
    } catch (error) {
        response.setHeader("Content-Type", "text/plain")
        response.status(404).send('Course Not Found');
    }
};

// a function that will use POST 
const createCourse = async (req, res, next) => {
    // console.log(req.body);
    try {
        const course = new Course(req.body);
        
        try {
            await course.save();  
            console.log(course);         
        } catch (error) {
            setHeaders(res, contentText);
            res.status(402).json(error);
            return;
        }

        setHeaders(res);
        res.status(201).json(course);    

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Course Not Found');
    }
    
}

// a function that will update a student by id through PUT
// const updateCourse = async (req, res, next) => {
//     const userId = new ObjectId(req.params.id);

//     const response = await mongodb.getDb().db("homework").collection("course").replaceOne({_id: userId}, req.body);
//     console.log(response);
//     setHeaders(res);
//     if (response.modifiedCount > 0){
//         res.status(204).send();
//     } else {
//         res.status(500).json(response.error || 'Sorry, there was an error while updating the course.');
//     }
// };

// const deletecourse = async (req, res, next) => {
//     const userId = new ObjectId(req.params.id);
//     const response = await mongodb.getDb().db("homework").collection("course").remove({_id: userId}, true); 
//     console.log(response);
//     setHeaders(res);
//     if (response.deletedCount > 0 ) {
//         res.status(200).send();
//     } else {
//         res.status(500).json(response.error || "Sorry, there was an error when you tried to delete this course.");
//     } 
// };

function setHeaders(res) {
    res.setHeader("content-type", 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
}

module.exports = {
    getAllCourses, getCourseById, createCourse, setHeaders
}
