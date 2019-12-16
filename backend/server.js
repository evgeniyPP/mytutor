const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const studentsRouter = require('./routes/students');
const tutorsRouter = require('./routes/tutors');

app.use('/students', studentsRouter);
app.use('/tutors', tutorsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
