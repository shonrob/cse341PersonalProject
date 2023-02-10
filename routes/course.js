const routes = require('express').Router();
const courseController = require('../controllers/course');
// const app = express();

routes.get('/all', courseController.getAllCourses);
routes.get('/:id', courseController.getCourseById);

// CREATE COURSE 
routes.post('/',
// #swagger.summary = 'Add a course to the database'
// #swagger.description = 'What does the course cover'
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseController.createCourse);


 // change course
 routes.put('/:id', 
 // #swagger.summary = 'Change a course to the database'
// #swagger.description = 'What does the course cover'
/* #swagger.responses[204] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseController.updateCourse);

// delete course
routes.delete('/:id',
// DELETE
 // #swagger.summary = 'Deletes a Course from the db based on ID.'
// #swagger.description = 'Deletes a course from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Course Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
courseController.deleteCourse);

module.exports = routes;
