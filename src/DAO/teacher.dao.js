const Teacher = require('../models/teacher.model')
const teacherDAO = {}

teacherDAO.getAll = async() => {
    const teachers = await Teacher.find();
    return teachers;
}

teacherDAO.getOne = async(dni) => {
    const teacher = await Teacher.findOne({dni:dni});
    return teacher;
}

teacherDAO.insertOne = async(teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "teacher saved";
}

teacherDAO.updateOne = async(dni, teacher) => {
    await Teacher.updateOne({dni:dni}, teacher);
    return "teacher updated"
}

teacherDAO.deleteOne = async(dni) => {
    await Teacher.deleteOne({dni:dni});
    return  "teacher delted";
}

module.exports = teacherDAO;