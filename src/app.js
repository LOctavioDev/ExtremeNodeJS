const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./routes/student.router');
const teacherRouter = require('./routes/teacher.router'); // Importa el enrutador de profesores
const app = express();

// SETTINGS
app.set('PORT', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Asocia el enrutador de estudiantes y el enrutador de profesores a sus respectivos prefijos
app.use('/students', studentRouter); // Asocia el enrutador de estudiantes a /students
app.use('/teachers', teacherRouter); // Asocia el enrutador de profesores a /teachers

module.exports = app;
