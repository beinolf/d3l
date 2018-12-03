const express = require('express');
const router = express.Router();

//Get Homework
router.get('/homework', function(req, res){
    Homeworks.getHomeworks(function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});
//Get Homework By ID
router.get('/homework/:_id', function(req, res){
    Homeworks.getHomeworksByID(req.params._id,function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});
//Add Homework
router.post('/homework', function(req, res){
    var homework = req.body;

    Homeworks.addHomework(homework, function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});

//Update Homework
router.put('/homework/:_id', function(req, res){
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
router.delete('/homework/:_id', function(req, res){
    var id = req.params._id;
    Homeworks.deleteHomework(id, function(err, homework){
        if(err){
            throw err;
        }
        res.json(homework);
    });
});

module.exports = router;