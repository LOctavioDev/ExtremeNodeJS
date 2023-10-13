const { Schema, model } = require('mongoose');
const teacherSchema = new Schema({
  dni: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  lastName: String,
  subjects: [String], // array para almacenar las asignaturas que enseña el profesor
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('teacher', teacherSchema);
