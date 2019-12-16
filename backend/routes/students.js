const router = require('express').Router();
let Student = require('../models/student.module');

router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const age = Number(req.body.age);
  const email = req.body.email;
  const phone = req.body.phone;
  const comment = req.body.comment;
  const langs = req.body.langs;

  const newStudent = new Student({ name, surname, age, email, phone, comment, langs });

  newStudent
    .save()
    .then(() => res.json('Student added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
