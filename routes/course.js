const routes = require('express').Router();
const courseModel = require('../controllers/course');
// const app = express();

routes.get('/courses', courseModel.getAllCourses);
routes.get('/course/:id', courseModel.getCourseById);

routes.post('/course',
// #swagger.summary = 'add a course to the db'        
// #swagger.description = 'add a course to the db'        
/* #swagger.responses[201] = {description: 'OK'}}}*/
 /*#swagger.parameters['obj'] = 
 {in:'body',description: 'Add a Course', schema: { $ref:'#/definitions/course'}} */
 courseModel.createCourse);


// DELETE
 // #swagger.summary = 'deletes a hero from the db based on ID.'
// #swagger.description = 'deletes a hero from the db based on ID.'
// #swagger.parameters['id'] = { description: 'hero Id' } 
/* #swagger.responses[200] = {description: 'OK',}    }    */
module.exports = routes;