var mongoose = require('mongoose');

//Item Schema
var itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

//Wishlist Schema
var wishlistSchema = mongoose.Schema({
    itemList:{
        type: [itemSchema]
    },
    teacher:{
        type:String,
        required:true
    }
});

var WishList = module.exports = mongoose.model('WishList', wishlistSchema);

//Get Wishlist
module.exports.getWishlists = function(callback, limit){
    Wishlist.find(callback).limit(limit);
};

//Get Wishlist by ID
module.exports.getWishlistByID = function(id, callback){
    Wishlist.findById(id, callback);
};

//Update Wishlist
module.exports.updateWishlist = function(id, wishlist, options, callback){
    var query = {_id: id};
    var update = {
        itemList: wishlist.itemList,
        teacher: wishlist.teacher
    }
    WishList.findOneAndUpdate(query, update, options, callback);
};

//Delete Wishlist
module.exports.deleteWishlist = function(id, callback){
    var query = {_id: id};
    WishList.remove(query, callback);
}