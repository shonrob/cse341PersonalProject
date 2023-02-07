const routes = require('express').Router();
const courseModel = require('../controllers/course');
// const app = express();

routes.get('/courses', courseModel.getAllCourses);
routes.get('/course/:id', courseModel.getCourseById);

routes.post('/course',
// #swagger.summary = 'Add a course to the database'        
// #swagger.description = 'What does the course cover'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseModel.createCourse);

 routes.put('/:id', 
 // #swagger.summary = 'Change a course in the database'        
// #swagger.description = 'Change the course description'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Change a Course', schema: { $ref:'#/definitions/course'}} */
 
 courseModel);

routes.delete('/:id', 

courseModel);
// DELETE
 // #swagger.summary = 'Deletes a Course from the db based on ID.'
// #swagger.description = 'Deletes a course from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Course Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
module.exports = routes;