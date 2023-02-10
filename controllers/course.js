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
    // console.log(courseId);
    // console.log(request.params.id);
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
            // console.log(course);         
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
};
const updateCourse = async (req, res) => {
    try {
        const courseId = new ObjectId(req.params.id);

        try {
            const changeCourse = await Course.findByIdAndUpdate({_id: courseId}, req.body, { runValidators: true});
            return res.status(201).json(changeCourse); 
        } catch (error) {
            setHeaders(res, contentText);
            res.status(402).json(error);
            return; 
        }

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Course Not Changed'); 
    }

}

const deleteCourse = async (req, res, next) =>  {
    try {
        const courseId = new ObjectId(req.params.id);
        try {
            const removedCourse = await Course.deleteOne({_id: courseId}, true);
            return res.status(201).json(removedCourse);
        } catch (error) {
            setHeaders(res, contentText);
            res.status(402).json(error);
            return; 
        }

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Course dropped');  
    }


}

function setHeaders(res) {
    res.setHeader("content-type", 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
}

module.exports = {
    getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse, setHeaders
}
