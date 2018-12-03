const express = require('express');
const router = express.Router();

//Get Message
router.get('/messages', function(req, res){
    Messages.getMessages(function(err, messages){
        if(err){
            throw err;
        }
        res.json(messages);
    });
});
//Get Message By ID
router.get('/messages/:_id', function(req, res){
    Messages.getMessagesByID(req.params._id,function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});
//Add Message
router.post('/messages', function(req, res){
    var message = req.body;

    Messages.addMessage(message, function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});

//Update Message
router.put('/messages/:_id', function(req, res){
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
router.delete('/messages/:_id', function(req, res){
    var id = req.params._id;
    Messages.deleteMessage(id, function(err, message){
        if(err){
            throw err;
        }
        res.json(message);
    });
});

module.exports = router;