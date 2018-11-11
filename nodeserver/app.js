const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());



//Define objects
Teachers = require('./models/teachers');
Parents = require('./models/parents');
Homework = require('./models/homework');
Messages = require('./models/messages');
Wishlists = require('./models/wishlist');
Todolists = require('./models/todolist');

//Route files
app.use('/api', require('./routes/teacherRoute'));
app.use('/api', require('./routes/parentRoute'));
app.use('/api', require('./routes/homeworkRoute'));
app.use('/api', require('./routes/todolistRoute'));
app.use('/api', require('./routes/wishlistRoute'));
app.use('/api', require('./routes/messageRoute'));

//Connect to Mongoose
mongoose.connect('mongodb://localhost/school');
var db = mongoose.connection;



app.listen(3000);
console.log('Running on port 3000');