const routes = require('express').Router();
const studentController = require('../controllers/student');
// const app = express();

routes.get('/students', studentController.getAllStudents);
routes.get('/student/:id', studentController.getStudentById);

routes.post('/student', 
// #swagger.summary = 'Add a student to the db'        
// #swagger.description = 'add a student to the db'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Student', schema: { $ref:'#/definitions/student'}} */
studentController.createStudent);

routes.put('/student/:id', studentController.updateStudent);

routes.delete('/student/:id', 
// DELETE
 // #swagger.summary = 'Deletes a student from the db based on ID.'
// #swagger.description = 'Deletes a student from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Student Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
studentController.deleteStudent);

module.exports = routes;