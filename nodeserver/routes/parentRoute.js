const express = require('express');
const router = express.Router();

//Get Parent
router.get('/parents', function(req, res){
    Parents.getParents(function(err, parents){
        if(err){
            throw err;
        }
        res.json(parents);
    });
});
//Get Parent By ID
router.get('/parents/:_id', function(req, res){
    Parents.getParentsByID(req.params._id,function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});
//Add Parent
router.post('/parents', function(req, res){
    var parent = req.body;

    Parents.addParent(parent, function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});

//Update Parent
router.put('/parents/:_id', function(req, res){
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
router.delete('/parents/:_id', function(req, res){
    var id = req.params._id;
    Parents.deleteParent(id, function(err, parent){
        if(err){
            throw err;
        }
        res.json(parent);
    });
});

module.exports = router;