const routes = require('express').Router();
const studentModel = require('../controllers/student');
// const app = express();

routes.get('/students', studentModel.getAllStudents);
routes.get('/student/:id', studentModel.getStudentById);

routes.post('/student', 
// #swagger.summary = 'Add a student to the db'        
// #swagger.description = 'add a student to the db'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Student', schema: { $ref:'#/definitions/student'}} */
studentModel.createStudent);

 routes.put('/:id', 
 // #swagger.summary = 'Change a studen in the database'        
// #swagger.description = 'Change the student description'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Change the student demographics', schema: { $ref:'#/definitions/student'}} */
 
 courseModel);

 routes.delete('/:id', 

 courseModel);
// DELETE
 // #swagger.summary = 'Deletes a student from the db based on ID.'
// #swagger.description = 'Deletes a student from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Student Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
module.exports = routes;