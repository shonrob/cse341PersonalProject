const routes = require('express').Router();
const studentModel = require('../controllers/student');
// const app = express();

routes.get('/students', studentModel.getAllStudents);
routes.get('/student/:id', studentModel.getStudentById);

routes.post('/student', 
// #swagger.summary = 'add a student to the db'        
// #swagger.description = 'add a student to the db'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Student', schema: { $ref:'#/definitions/student'}} */
studentModel.createStudent);

module.exports = routes;