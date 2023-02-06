const routes = require('express').Router();
const courseModel = require('../controllers/course');
// const app = express();

routes.get('/courses', courseModel.getAllCourses);
routes.get('/course/:id', courseModel.getCourseById);

routes.post('/course', courseModel.createCourse);

module.exports = routes;