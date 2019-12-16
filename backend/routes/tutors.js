const router = require('express').Router();
let Tutor = require('../models/tutor.module');

router.route('/').get((req, res) => {
  Tutor.find()
    .then(tutors => res.json(tutors))
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

  const newTutor = new Tutor({ name, surname, age, email, phone, comment, langs });

  newTutor
    .save()
    .then(() => res.json('Tutor added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
