const teacherController = require('../controllers/teacher.controller');
const { Router } = require('express');
const router = Router();

// Obtener todos los profesores
router.get('/getAll', teacherController.getAll);

// Obtener un profesor por su número de identificación 
router.get('/getOne/:employeenumber', teacherController.getOne);

// Agregar un nuevo profesor
router.post('/insertOne', teacherController.insertOne);

// Actualizar los datos de un profesor por su número de identificación 
router.put('/updateOne/:employeenumber', teacherController.updateOne);

// Eliminar un profesor por su número de identificación (dni)
router.delete('/deleteOne/:employeenumber', teacherController.deleteOne);

module.exports = router;