var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const User = require('../db/userSchema');

const watchlistSchema = new mongoose.Schema({
    stockName:{
        type: String,
        required: true,
        unique: true,
        // index:{unique: true},
    },
    stockSymbol:{
        type: String,
        required: true,
        unique: true,
    }
});
// module.exports = mongoose.model('WatchlistItem',watchlistSchema )
const WatchlistItem = mongoose.model('WatchlistItem',watchlistSchema )


// getting user watchlists form database 
var watchlists ;
router.post('/', async function (req, res, next){
    var id = req.body.userId;
    console.log(req.body);
    try{
        console.log(id);
        // console.log(id);
        const user = await User.findById({"_id": id },{watchlist:1,_id:0})
        .then( (res)=>{
            // console.log("this is result",res.watchlist);
            return res.watchlist
        })
        console.log(user);
        watchlists = user;
        res.send(user);

    }catch(err){
        console.log(err);
    }


    console.log("this is the watchlist",watchlists)
});

// Adding watclist to the database 
router.post('/add', async function (req, res, next){
    var id = req.body.userId;
    var stockName = req.body.stockName;
    var stockSymbol = req.body.stockSymbol;

    console.log("this is the request body",req.body);
    try{
        // console.log(id);
        // console.log(id);
        // const userWatchlist = await User.findOne({"_id": id })


        if( !stockName || !stockSymbol )
        {
            return res.status(422).json({error:"Please add All the fields"});
        }else{
            
            const user = await User.updateOne(
                {"_id": id },
                { $addToSet : { watchlist : {
                    stockName,
                    stockSymbol
                }
                } 
            }).then((res)=>{
                console.log("adding stock to wathclist result",res)
                return res;
            })
            return res.send(user); 
        }
        console.log(user);
    }catch(err){
        console.log(err);
        res.send(err);
    }

});

// dummy data for adding 
// {
//     "userId":"",
//     "stockName":"Tata Global Beverages Limited",
//     "stockSymbol":"TATACONSUM.BSE"
// }



// this is firing two queryies to update the watchlists

// router.post('/add', async function (req, res, next){
//     var id = req.body.userId;
//     var stockName = req.body.stockName;
//     var stockSymbol = req.body.stockSymbol;

//     console.log(req.body);
//     try{
//         console.log(id);
//         // console.log(id);
//         const userWatchlist = await User.findById({"_id": id })
//         const user = await User.findByIdAndUpdate(
//             {"_id": id },
//             {"watchlist":[ 
//                         ...userWatchlist.watchlist,    
//                         {    
//                             "stockName": stockName,
//                             "stockSymbol":stockSymbol
//                         } 
//                     ]
//             } )
//         console.log(user.watchlist);
        
//         res.send("ok");

//     }catch(err){
//         console.log(err);
//     }

// });


//to delete a entry in watchlist
router.post('/remove', async function (req, res, next){
    var id = req.body.userId;
    var stockSymbol = req.body.stockSymbol;
    console.log("this is the request body",req.body);
    try{
        if(!stockSymbol )
        {
            return res.status(422).json({error:"Please add All the fields"});
        }else{
            
            const user = await User.updateOne(
                {"_id": id },
                { $pull : { watchlist : {stockSymbol:stockSymbol} } }
            ).then((res)=>{
                console.log("adding stock to wathclist result",res)
                return res;
            })
            return res.send(user); 
        }
        console.log(user);
    }catch(err){
        console.log(err);
        res.send(err);
    }


    console.log("this is the watchlist",watchlists)
});


module.exports = router;
