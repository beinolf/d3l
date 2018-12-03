const express = require('express');
const router = express.Router();

//Get Teacher
router.get('/api/teachers', function(req, res){
    Teachers.getTeachers(function(err, teachers){
        if(err){
            throw err;
        }
        res.json(teachers);
    });
});
//Get Teacher By ID
router.get('/api/teachers/:_id', function(req, res){
    Teachers.getTeachersByID(req.params._id,function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});
//Add Teacher
router.post('/api/teachers', function(req, res){
    var teacher = req.body;

    Teachers.addTeacher(teacher, function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});

//Update Teacher
router.put('/api/teachers/:_id', function(req, res){
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
router.delete('/api/teachers/:_id', function(req, res){
    var id = req.params._id;
    Teachers.deleteTeacher(id, function(err, teacher){
        if(err){
            throw err;
        }
        res.json(teacher);
    });
});

module.exports = router;