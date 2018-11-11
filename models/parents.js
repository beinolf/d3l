var mongoose = require('mongoose');

//Parent schema
var parentSchema = mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    teacher:{
        type:String
    }
});

var Parent = module.exports = mongoose.model('Parent', parentSchema);

//Get parents
module.exports.getParents = function(callback, limit){
    Parent.find(callback).limit(limit);
};

//Get parents by id
module.exports.getParentsByID = function(id, callback){
    Parent.findById(id, callback);
};

//Add parent
module.exports.addParent = function(parent, callback){
    Parent.create(parent, callback);
};

//Update Parent
module.exports.updateParent = function(id, parent, options, callback){
    var query = {_id: id};
    var update = {
        name: parent.name,
        username: parent.username,
        password: parent.password,
        teacher: parent.teacher
    }
    Parent.findOneAndUpdate(query, update, options, callback);
}

//Delete parent
module.exports.deleteParent = function(id, callback){
    var query = {_id: id};
    Parent.remove(query, callback);
};