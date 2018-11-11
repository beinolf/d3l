var mongoose = require('mongoose');

//Homework Schema
var homeworkSchema = mongoose.Schema({
    assignmentName:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date
    },
    teacher:{
        type:String
    }
});

var Homework = module.exports = mongoose.model('Homework', homeworkSchema);

//Get homeworks
module.exports.getHomework = function(callback, limit){
    Homework.find(callback).limit(limit);
};

//Get homeworks by id
module.exports.getHomeworkByID = function(id, callback){
    Homework.findById(id, callback);
};

//Add homework
module.exports.addHomework = function(homework, callback){
    Homework.create(homework, callback);
};

//Update Homework
module.exports.updateHomework = function(id, homework, options, callback){
    var query = {_id: id};
    var update = {
        assignmentName: homework.assignmentName,
        dueDate: homework.dueDate,
        teacher: homework.teacher
    }
    Homework.findOneAndUpdate(query, update, options, callback);
}

//Delete homework
module.exports.deleteHomework = function(id, callback){
    var query = {_id: id};
    Homework.remove(query, callback);
};