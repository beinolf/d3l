var mongoose = require('mongoose');

//Item Schema
var itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

//Todolist Schema
var todolistSchema = mongoose.Schema({
    itemList:{
        type: [itemSchema]
    },
    teacher:{
        type:String,
        required:true
    }
});

var Todolist = module.exports = mongoose.model('TodoList', todolistSchema);

//Get Todolist
module.exports.getTodolists = function(callback, limit){
    Todolist.find(callback).limit(limit);
};

//Get Todolist by ID
module.exports.getTodolistByID = function(id, callback){
    Todolist.findById(id, callback);
};

//Update Todolist
module.exports.updateTodolist = function(id, todolist, options, callback){
    var query = {_id: id};
    var update = {
        itemList: todolist.itemList,
        teacher: todolist.teacher
    }
    Todolist.findOneAndUpdate(query, update, options, callback);
};

//Delete Todolist
module.exports.deleteTodolist = function(id, callback){
    var query = {_id: id};
    Todolist.remove(query, callback);
}