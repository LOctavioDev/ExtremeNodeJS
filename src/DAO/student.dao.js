const Student = require('../models/student.model')
const studentDAO = {}

studentDAO.getAll = async() => {
    const students = await Student.find();
    return students;

}

studentDAO.getOne = async(dni) => {
    const student = await Student.findOne({dni:dni});
    return student;

}

studentDAO.insertOne = async(student) => {
    const studentSaved = new Student(student);
    await studentSaved.save();
    return "student saved";

}

studentDAO.updateOne = async(dni, student) => {
    await Student.updateOne({dni: dni},student);
    return "student updated"

}


module.exports = studentDAO;

