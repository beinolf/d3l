const express = require('express');
const router = express.Router();

//Get todolist
router.get('/todolist', function(req, res){
    todolist.gettodolists(function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});
//Get todolist By ID
router.get('/todolist/:_id', function(req, res){
    todolist.gettodolistByID(req.params._id,function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});
//Add todolist
router.post('/todolist', function(req, res){
    var todolist = req.body;

    todolist.addtodolist(todolist, function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});

//Update todolist
router.put('/todolist/:_id', function(req, res){
    var id = req.params._id;
    var todolist = req.body;

    todolist.updatetodolist(id, todolist, {},  function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});

//Delete todolist
router.delete('/todolist/:_id', function(req, res){
    var id = req.params._id;
    todolist.deletetodolist(id, function(err, todolist){
        if(err){
            throw err;
        }
        res.json(todolist);
    });
});

module.exports = router;