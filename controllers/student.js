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
    // console.log(studentId);
    // console.log(request.params.id);
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
    if(req.oidc.isAuthenticated() ){
        console.log(req.oidc.user.sub);
    
    try {
        const student = new Student(req.body);

        try {
            await student.save();
            return res.status(201).json(student);
       
        } catch (error) {
            setHeaders(res, contentText);
            res.status(400).json(error);
            return;
        }  

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Student Not Found');
    }
    }else {
        res.setHeader("Content-Type", "text/plain")
        res.status(403).send('Not Logged In'); 
    }    
}

const updateStudent = async (req, res) => {
    if(req.oidc.isAuthenticated() ){
    try {
        const studentId = new ObjectId(req.params.id);

        try {
            const changeStudent = await Student.findByIdAndUpdate({_id: studentId}, req.body, { runValidators: true});

            return res.status(204).json(changeStudent);
            
 
        } catch (error) {
            setHeaders(res, contentText);
            res.status(400).json(error);
            return; 
        }

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Student Not Changed'); 
    }
    }else {
        res.setHeader("Content-Type", "text/plain")
        res.status(403).send('Not Logged In');   
    }

}

const deleteStudent = async (req, res, next) =>  {
    if(req.oidc.isAuthenticated() ){
    try {
        const studentId = new ObjectId(req.params.id);
        try {
            const removedStudent = await Student.deleteOne({_id: studentId});
            return res.status(201).json(removedStudent);
        } catch (error) {
            setHeaders(res, contentText);
            res.status(400).json(error);
            return; 
        }

    } catch (error) {
        res.setHeader("Content-Type", "text/plain")
        res.status(500).send('Student Not dropped');  
    }
}else {
    res.setHeader("Content-Type", "text/plain")
    res.status(403).send('Not Logged In');   
}


}
module.exports = {getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent}





