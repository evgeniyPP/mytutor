const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tutorSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: false },
    langs: { type: Array, required: true }
  },
  {
    timestamps: true
  }
);

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
