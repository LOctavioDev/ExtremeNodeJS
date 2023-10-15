const teacherDAO = require('../DAO/teacher.dao');
const teacherController = {}

teacherController.getAll = async (req, res) => {
    teacherDAO.getAll()
      .then(teachers => {
        res.render('../src/views/indexteachers', {teachers})
      })
      .catch(err => {
        res.status(500).json({
          status: "request failed"
        });
      });
  }


  teacherController.getOne = async (req, res) => {
    teacherDAO.getOne(req.params.employeenumber)
      .then(teacher => {
        if (teacher!=null) {
          res.render('../src/views/editteachers', {teacher});
        } else {
          res.status(404).json({
            status: "not found"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          status: "request failed",
          error: err.message 
        });
      });
  }


teacherController.insertOne = async(req, res) => {
    teacherDAO.insertOne(req.body)
    .then(result => {
          res.redirect('/api/teachers/getAll');
          
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

teacherController.updateOne = async(req, res) => {
    teacherDAO.updateOne(req.params.employeenumber, req.employeenumber)
    .then(result => {
       res.redirect('/api/teachers/getAll');

    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

teacherController.deleteOne = async(req, res) => {
    teacherDAO.deleteOne(req.params.employeenumber)
    .then(result => {
      res.redirect('/api/teachers/getAll');

    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}


module.exports = teacherController;