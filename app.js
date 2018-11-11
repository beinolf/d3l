const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());



//Define objects
Teachers = require('./models/teachers');
Parents = require('./models/parents');
Homeworks = require('./models/homework');
Messages = require('./models/messages');
Wishlist = require('./models/wishlist');
Todolists = require('./models/todolist');



//Connect to Mongoose
mongoose.connect('mongodb://localhost/school');
var db = mongoose.connection;

//Define Routes for HTTP requests
/********************************************************************* */

//Get Homework
app.get('/homework', function(req, res){
    Homeworks.getHomework(function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});


//Get Homework By ID
app.get('/homework/:_id', function(req, res){
    Homeworks.getHomeworkByID(req.params._id,function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});
//Add Homework
app.post('/homework', function(req, res){
    var homework = req.body;

    Homeworks.addHomework(homework, function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});

//Update Homework
app.put('/homework/:_id', function(req, res){
    var id = req.params._id;
    var homework = req.body;

    Homeworks.updateHomework(id, homework, {},  function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});

//Delete Homework
app.delete('/homework/:_id', function(req, res){
    var id = req.params._id;
    Homeworks.deleteHomework(id, function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});

//Get Message
app.get('/messages', function(req, res){
    Messages.getMessages(function(err, messages){
        if(err){
            throw err;
        }
        res.json(messages);
    });
});
//Get Message By ID
app.get('/messages/:_id', function(req, res){
    Messages.getMessagesByID(req.params._id,function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});
//Add Message
app.post('/messages', function(req, res){
    var message = req.body;

    Messages.addMessage(message, function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});

//Update Message
app.put('/messages/:_id', function(req, res){
    var id = req.params._id;
    var message = req.body;

    Messages.updateMessage(id, message, {},  function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});

//Delete Message
app.delete('/messages/:_id', function(req, res){
    var id = req.params._id;
    Messages.deleteMessage(id, function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});

//Get Parent
app.get('/parents', function(req, res){
    Parents.getParents(function(err, parents){
        if(err){
            throw err;
        }
        res.json(parents);
    });
});
//Get Parent By ID
app.get('/parents/:_id', function(req, res){
    Parents.getParentsByID(req.params._id,function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});
//Add Parent
app.post('/parents', function(req, res){
    var parent = req.body;

    Parents.addParent(parent, function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});

//Update Parent
app.put('/parents/:_id', function(req, res){
    var id = req.params._id;
    var parent = req.body;

    Parents.updateParent(id, parent, {},  function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});

//Delete Parent
app.delete('/parents/:_id', function(req, res){
    var id = req.params._id;
    Parents.deleteParent(id, function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});

//Get Teacher
app.get('/teachers', function(req, res){
    Teachers.getTeachers(function(err, teachers){
        if(err){
            throw err;
        }
        res.json(teachers);
    });
});
//Get Teacher By ID
app.get('/teachers/:_id', function(req, res){
    Teachers.getTeachersByID(req.params._id,function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});
//Add Teacher
app.post('/teachers', function(req, res){
    var teacher = req.body;

    Teachers.addTeacher(teacher, function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});

//Update Teacher
app.put('/teachers/:_id', function(req, res){
    var id = req.params._id;
    var teacher = req.body;

    Teachers.updateTeacher(id, teacher, {},  function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});

//Delete Teacher
app.delete('/teachers/:_id', function(req, res){
    var id = req.params._id;
    Teachers.deleteTeacher(id, function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});

//Get Todolist
app.get('/todolist', function(req, res){
    Todolists.getTodolists(function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});
//Get Todolist By ID
app.get('/todolist/:_id', function(req, res){
    Todolists.getTodolistByID(req.params._id,function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});
//Add Todolist
app.post('/todolist', function(req, res){
    var todolist = req.body;

    Todolists.addTodolist(todolist, function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});

//Update Todolist
app.put('/todolist/:_id', function(req, res){
    var id = req.params._id;
    var todolist = req.body;

    Todolists.updateTodolist(id, todolist, {},  function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});

//Delete Todolist
app.delete('/todolist/:_id', function(req, res){
    var id = req.params._id;
    Todolists.deleteTodolist(id, function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});

//Get Wishlist
app.get('/wishlist', function(req, res){
    Wishlist.getWishlists(function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});
//Get Wishlist By ID
app.get('/wishlist/:_id', function(req, res){
    Wishlist.getWishlistByID(req.params._id,function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});
//Add Wishlist
app.post('/wishlist', function(req, res){
    var wishlist = req.body;

    Wishlist.addWishlist(wishlist, function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});

//Update Wishlist
app.put('/wishlist/:_id', function(req, res){
    var id = req.params._id;
    var wishlist = req.body;

    Wishlist.updateWishlist(id, wishlist, {},  function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});

//Delete Wishlist
app.delete('/wishlist/:_id', function(req, res){
    var id = req.params._id;
    Wishlist.deleteWishlist(id, function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});

app.listen(3000);
console.log('Running on port 3000');