var mongoose = require('mongoose');

//Teacher schema
var teacherSchema = mongoose.Schema({
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
    }
});

var Teacher = module.exports = mongoose.model('Teacher', teacherSchema);

//Get teachers
module.exports.getTeachers = function(callback, limit){
    Teacher.find(callback).limit(limit);
};

//Get teachers by id
module.exports.getTeachersByID = function(id, callback){
    Teacher.findById(id, callback);
};

//Add teacher
module.exports.addTeacher = function(teacher, callback){
    Teacher.create(teacher, callback);
};

//Update Teacher
module.exports.updateTeacher = function(id, teacher, options, callback){
    var query = {_id: id};
    var update = {
        name: teacher.name,
        username: teacher.username,
        password: teacher.password
    }
    Teacher.findOneAndUpdate(query, update, options, callback);
}

//Delete teacher
module.exports.deleteTeacher = function(id, callback){
    var query = {_id: id};
    Teacher.remove(query, callback);
};