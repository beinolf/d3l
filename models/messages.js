var mongoose = require('mongoose');

//Message schema
var messageSchema = mongoose.Schema({
    messageBody:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    datePosted:{
        type:Date
    }
});

var Message = module.exports = mongoose.model('Message', messageSchema);

//Get messages
module.exports.getMessages = function(callback, limit){
    Message.find(callback).limit(limit);
};

//Get messages by id
module.exports.getMessagesByID = function(id, callback){
    Message.findById(id, callback);
};

//Add message
module.exports.addMessage = function(message, callback){
    Message.create(message, callback);
};

//Update Message
module.exports.updateMessage = function(id, message, options, callback){
    var query = {_id: id};
    var update = {
        name: message.name,
        messageBody: message.messageBody,
        datePosted: message.datePosted
    }
    Message.findOneAndUpdate(query, update, options, callback);
}

//Delete message
module.exports.deleteMessage = function(id, callback){
    var query = {_id: id};
    Message.remove(query, callback);
};