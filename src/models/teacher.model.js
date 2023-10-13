const { Schema, model } = require('mongoose');
const teacherSchema = new Schema({
  employeenumber: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  lastname: String,
  profession: String,
  area: String,
  salario: Number,
  subjects: [String]
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('teacher', teacherSchema);