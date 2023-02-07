const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '',      // by default: '1.0.0'
    title: 'School API',        // by default: 'REST API'
    description: 'Documentation to get my contacts',  // by default: ''
  },
  host: "",
  // server: [
  //   {url: "http:localhost3000", description: "This is my local server."},
  //   {url: "https://cse341project.onrender.com/", description: "This is my render server."},
  // ],
  // basePath: '/',  // by default: '/'
  basePath: "",
  // schemes: ['http'],   // by default: ['http']
  schemes: [],
  definitions: {
    course: {
      subject: "Math",
      description: "Subject Material",
      teacherName: "Mr/Ms Doe",
      currentGrade: "A",
      assignment: "What is the project?", 
      dueDate: "01/01/2025"
  },
    student: {
      firstName: "Sarah",
      lastName: "Doe",
      enrolled: true
    }    
}
};


const outputFile = './swagger-output.json';
const endpointsFiles = ['server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);



// in swagger-outputFile.json the host needs to read where you want it to deploy ie local host or on render. 