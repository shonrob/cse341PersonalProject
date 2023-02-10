// main overview  of routes 
const routes = require('express').Router();

// const connectIndex = require('../controllers/index');
// const swagger = require('./swagger');
// routes.use('/', swagger)

// routes.get('/', (req, res) => {
//     res.send('Adam Robinson');
// });

// routes.get('/', connectIndex.getData);
// app.use('/', require('./routes/course'));
// app.use('/', require('./routes/student'));


routes.use('/course', require('./course'));
routes.use('/student', require('./student'));

module.exports = routes;



