const routes = require('express').Router();
const courseController = require('../controllers/course');
const middlewareIsAuth = require('../middleware/isAuth');
// const app = express();

routes.get('/all', middlewareIsAuth.isAuthorized, courseController.getAllCourses);
routes.get('/:id', courseController.getCourseById);

// CREATE COURSE 
routes.post('/', middlewareIsAuth.isAuthorized,
// #swagger.summary = 'Add a course to the database'
// #swagger.description = 'What does the course cover'
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseController.createCourse);


 // change course
 routes.put('/:id', middlewareIsAuth.isAuthorized,
 // #swagger.summary = 'Change a course to the database'
// #swagger.description = 'What does the course cover'
/* #swagger.responses[204] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseController.updateCourse);

// delete course
routes.delete('/:id', middlewareIsAuth.isAuthorized,
// DELETE
 // #swagger.summary = 'Deletes a Course from the db based on ID.'
// #swagger.description = 'Deletes a course from the db based on ID.'
// #swagger.parameters['id'] = { description: 'Course Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
courseController.deleteCourse);

module.exports = routes;
