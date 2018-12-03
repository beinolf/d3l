const express = require('express');
const router = express.Router();

//Get Wishlist
router.get('/wishlist', function(req, res){
    Wishlist.getWishlists(function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});
//Get Wishlist By ID
router.get('/wishlist/:_id', function(req, res){
    Wishlist.getWishlistByID(req.params._id,function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});
//Add Wishlist
router.post('/wishlist', function(req, res){
    var wishlist = req.body;

    Wishlist.addWishlist(wishlist, function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});

//Update Wishlist
router.put('/wishlist/:_id', function(req, res){
    var id = req.params._id;
    var wishlist = req.body;

    Wishlist.updateWishlist(id, wishlist, {},  function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});

//Delete Wishlist
router.delete('/wishlist/:_id', function(req, res){
    var id = req.params._id;
    Wishlist.deleteWishlist(id, function(err, wishlist){
        if(err){
            throw err;
        }
        res.json(wishlist);
    });
});

module.exports = router;