const { setHeaders } = require('./student');
const { setHeaders } = require('./course');


function getData(req, res) {
    setHeaders(res);
    res.setHeader("content-type", 'text/css');
    res.status(200).send('Keep Going');
}

module.exports = {
    getData
};


// shouldn't need to touch file anymore.....gets headers for the student and courses 