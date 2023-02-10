const routes = require('express').Router();
const studentController = require('../controllers/student');
// const app = express();

routes.get('/all', studentController.getAllStudents);
routes.get('/:id', studentController.getStudentById);

// CREATE STUDENT 
routes.post('/', 
// #swagger.summary = 'Add a student to the db'        
// #swagger.description = 'add a student to the db'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Student', schema: { $ref:'#/definitions/student'}} */
studentController.createStudent);

// CHANGE STUDENT 
routes.put('/:id', 
 // #swagger.summary = 'Change a student to the database'
// #swagger.description = 'What does the student cover'
/* #swagger.responses[204] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a student', schema: { $ref:'#/definitions/student'}} */
 studentController.updateStudent);

// DELETE STUDENT 
routes.delete('/:id', 
// DELETE
 // #swagger.summary = 'Deletes a student from the db based on ID.'
// #swagger.description = 'Deletes a student from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Student Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
studentController.deleteStudent);

module.exports = routes;