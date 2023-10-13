const Teacher = require('../models/teacher.model')
const teacherDAO = {}

teacherDAO.getAll = async() => {
    const teachers = await Teacher.find();
    return teachers;
}

teacherDAO.getOne = async(employeenumber) => {
    const teacher = await Teacher.findOne({employeenumber:employeenumber});
    return teacher;
}

teacherDAO.insertOne = async(teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "teacher saved";
}

teacherDAO.updateOne = async(employeenumber, teacher) => {
    await Teacher.updateOne({employeenumber:employeenumber}, teacher);  
    return "teacher updated"
}

teacherDAO.deleteOne = async(employeenumber) => {
    await Teacher.deleteOne({employeenumber:employeenumber});
    return  "teacher delted";
}

module.exports = teacherDAO;