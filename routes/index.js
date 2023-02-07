// main overview  of routes 
const routes = require('express').Router();

// const connectIndex = require('../controllers/index');
const swagger = require('./swagger');
routes.use('/', swagger)

// routes.get('/', (req, res) => {
//     res.send('Adam Robinson');
// });

// routes.get('/', connectIndex.getData);

routes.use('/', require('./course'));
routes.use('/', require('./student'));

module.exports = routes;



