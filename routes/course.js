const routes = require('express').Router();
const courseController = require('../controllers/course');
// const app = express();

routes.get('/courses', courseController.getAllCourses);
routes.get('/course/:id', courseController.getCourseById);

routes.post('/course',
// #swagger.summary = 'Add a course to the database'        
// #swagger.description = 'What does the course cover'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseController.createCourse);


 // change course
 routes.put('/course/:id', courseController.updateCourse);

// delete course
routes.delete('/course/:id',
// DELETE
 // #swagger.summary = 'Deletes a Course from the db based on ID.'
// #swagger.description = 'Deletes a course from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Course Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
courseController.deleteCourse);

module.exports = routes;


// thought I needed for put statement but validated in other document. 
 // #swagger.summary = 'Change a course in the database'        
// #swagger.description = 'Change the course description'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Change a Course', schema: { $ref:'#/definitions/course'}} */