const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./routes/student.router');
const app = express();

//SETTINGS
app.set('PORT', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//MIDDLEARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(studentRouter);

module.exports = app;