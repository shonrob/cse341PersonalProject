const routes = require('express').Router();
const studentModel = require('../controllers/student');
// const app = express();

routes.get('/students', studentModel.getAllStudents);
routes.get('/student/:id', studentModel.getStudentById);

routes.post('/student', studentModel.createStudent);

module.exports = routes;