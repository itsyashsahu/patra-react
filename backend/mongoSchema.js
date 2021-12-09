db.createCollection("user", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "email", "password"],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             email: {
                bsonType: "string",
                description: "must be an integer in [ 2017, 3017 ] and is required"
             },
             password: {
                bsonType: "string",
                minimum:4,
                description: "cannot be less then 4 and is required"
             },
             Gender: {
                enum: [ "Male", "Female",null],
                description: "can only be one of the enum values and is required"
             },
             proffession: {
                bsonType: "string",
                description: "must be a string if the field exists"
             },
             address: {
                bsonType: "object",
                required: [ "city" ],
                properties: {
                   street: {
                      bsonType: "string",
                      description: "must be a string if the field exists"
                   },
                   city: {
                      bsonType: "string",
                      description: "must be a string and is required"
                   }
                }
             },
             dob:{
                 bsonType:"date",
                 description:"must be a date and is required "
             },
             phone:{
                bsonType:"string",
                description:"must be a string " 
             },
             fundsGiven:{
                bsonType:"number",
                description:"must be a number "
             },
             fundsUsed:{
                bsonType:"number",
                description:"must be a number "
             },
             fundsAvailable:{
                bsonType:"number",
                description:"must be a number "
             },
             watchlists:{
                bsonType:"array",
                items:{
                   bsonType:"array",
                   items:{
                      bsonType:"object",
                      required:["stockSymbol","stockName"],
                      properties:{
                         stockSymbol:{
                            bsonType:"string",
                            description:"this is the symbol of the stock "
                         },
                         stockName:{
                            bsonType:"string",
                            description:"this is the name of the stock "
                         }
                      }
                   },
                   minItems:0,
                   maxItems:6,
                   description:"this is the array of a watchlist item or entry of a stock in watchlist max 6 stocks per watchlist"
                },
                minItems:0,
                maxItems:5,
                description:"This is the array of watchlists and there can be max 5 watchlist per user"
             },
             holdings:{
                bsonType:"array",
                items:{
                  bsonType:"object",
                  required:["stockSymbol","stockName","qty","buyPrice","date"],
                    properties:{
                       stockSymbol:{
                          bsonType:"string",
                          description:"this is the symbol of the stock "
                       },
                       stockName:{
                          bsonType:"string",
                          description:"this is the name of the stock "
                       },
                       qty:{
                          bsonType:"number", 
                       },
                       buyPrice:{
                          bsonType:"number", 
                       },
                       date:{
                          bsonType:"date"
                       }
                     }
                  },
                  description:"this is the array of holdings that the user has "
             },
             transHistory:{
                bsonType:"array",
                items:{
                  bsonType:"object",
                  required:["stockSymbol","stockName","qty","transType","transPrice","date"],
                    properties:{
                       stockSymbol:{
                          bsonType:"string",
                          description:"this is the symbol of the stock "
                       },
                       stockName:{
                          bsonType:"string",
                          description:"this is the name of the stock "
                       },
                       qty:{
                          bsonType:"number", 
                       },
                       transType:{
                        enum: [ "Bought", "Sold"],
                        description:"the type of transaction it was actually "
                       },
                       transPrice:{
                          bsonType:"number", 
                       },
                       date:{
                          bsonType:"date"
                       },
                     }
                }

             }

          }
       }
    }
 })



 

 db.user.insertOne({
    name:"hello ",
    email:"thisis@gamil.com",
    password:"alkdjfasldfkjasdflkj"
 })




 db.runCommand({collMod:"users", 
 validator: {
   $jsonSchema: {
      bsonType: "object",
      required: [ "name", "email", "password"],
      properties: {
         name: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         email: {
            bsonType: "string",
            description: "must be an integer in [ 2017, 3017 ] and is required"
         },
         password: {
            bsonType: "string",
            minimum:4,
            description: "cannot be less then 4 and is required"
         },
         gender: {
            enum: [ "Male", "Female",null],
            description: "can only be one of the enum values and is required"
         },
         proffession: {
            bsonType: "string",
            description: "must be a string if the field exists"
         },
         address: {
            bsonType: "object",
            required: [ "city" ],
            properties: {
               street: {
                  bsonType: "string",
                  description: "must be a string if the field exists"
               },
               city: {
                  bsonType: "string",
                  description: "must be a string and is required"
               }
            }
         },
         dob:{
             bsonType:"string",
             description:"must be a date and is required "
         },
         phone:{
            bsonType:"string",
            description:"must be a string " 
         },
         fundsGiven:{
            bsonType:"number",
            description:"must be a number "
         },
         fundsUsed:{
            bsonType:"number",
            description:"must be a number "
         },
         fundsAvailable:{
            bsonType:"number",
            description:"must be a number "
         },
         watchlists:{
            bsonType:"array",
            items:{
               
                  bsonType:"object",
                  required:["stockSymbol","stockName"],
                  properties:{
                     stockSymbol:{
                        bsonType:"string",
                        description:"this is the symbol of the stock "
                     },
                     stockName:{
                        bsonType:"string",
                        description:"this is the name of the stock "
                     }
                  
               },
               minItems:0,
               maxItems:6,
               description:"this is the array of a watchlist item or entry of a stock in watchlist max 6 stocks per watchlist"
            },
            minItems:0,
            maxItems:5,
            description:"This is the array of watchlists and there can be max 5 watchlist per user"
         },
         holdings:{
            bsonType:"array",
            items:{
              bsonType:"object",
              required:["stockSymbol","stockName","qty","price"],
                properties:{
                   stockSymbol:{
                      bsonType:"string",
                      description:"this is the symbol of the stock ",
                   },
                   stockName:{
                      bsonType:"string",
                      description:"this is the name of the stock "
                   },
                   qty:{
                      bsonType:"number", 
                   },
                   price:{
                      bsonType:"number", 
                   },
                   date:{
                      bsonType:"date"
                   }
                 }
              },
              description:"this is the array of holdings that the user has "
         },
         transHistory:{
            bsonType:"array",
            items:{
              bsonType:"object",
              required:["stockName","qty","transType","transPrice"],
                properties:{
                   stockName:{
                      bsonType:"string",
                      description:"this is the name of the stock "
                   },
                   qty:{
                      bsonType:"number", 
                   },
                   transType:{
                    enum: [ "Bought", "Sold"],
                    description:"the type of transaction it was actually "
                   },
                   transPrice:{
                      bsonType:"number", 
                   }
                 }
            }

         }

      }
   }
   }
})

db.user.updateOne({},{ $push: { watchlists:{  "stockName":"asdlkfjasdf",
                                             "stockSymbol":876 } } } )
                                
                                             
db.users.findOne({"_id":ObjectId("61a8ca10e207b24fd4f1f650")})                                             

db.users.findOne({"_id":ObjectId("61a8ca10e207b24fd4f1f650"), holdings:{ $elemMatch:{stockSymbol:"TATASTEEL.BSE"} } },)  
db.users.findOne({"_id":ObjectId("61a8ca10e207b24fd4f1f650"), holdings:{ $elemMatch:{stockSymbol:"TATASTEEL.BSE"} } },)  
db.users.findOne({"_id":ObjectId("61a8ca10e207b24fd4f1f650"), holdings:{ $elemMatch:{stockSymbol:"TATASTEEL.BSE"} } },)  

db.users.updateOne(
   {"_id":ObjectId("61ac41cd2a9df908b5f104b4"), holdings:{ $elemMatch:{stockSymbol:"KOTAKBANK.BSE"} } },
   { $set : { "holdings.$.qty" : 10 } }
   )  

// this query works fine 
db.users.updateOne({"_id":ObjectId("61a3a370b86c8020a577d916")},
   {
      $inc : { 
         "fundsAvailable" : 1 
      },
      $addToSet : { "holdings" : {
         "stockSymbol":"TATASTEEL.BSE",
         "price":"773",
         "qty":89,
         "option":"buy"
      },
   }
}) 

db.users.updateOne({"_id":ObjectId("61a8ca10e207b24fd4f1f650")},{
   $addToSet : { transHistory : {
      "stockSymbol":"TATASTEEL.BSE",
      "price":"773",
      "qty":"3",
      "option":"buy"
      }
   }
}) 



db.users.aggregate([
   {
      $match: { "_id":ObjectId("61ac032723176d376a96c00f"),"holdings.stockSymbol":"HDFCBANK.BSE"},
   },
   {
      $project: { "_id":1,"holdings":1}
   },
   {
      $unwind:"$holdings"
   },
   {
      $match: { "_id":ObjectId("61ac032723176d376a96c00f"),"holdings.stockSymbol":"HDFCBANK.BSE"},
   },
   { $replaceWith: {
      $setField: {
         field: "holdings.qty",
         input: ObjectId("61ac032723176d376a96c00f"),
         value: 100
         } 
      } 
   }
]).pretty()


db.users.aggregate([
   {
      $match: { "_id":ObjectId("61a8ca10e207b24fd4f1f650"),"holdings.stockSymbol":"HDFCBANK.BSE"},
   },
   {
      $addToSet : { holdings : {
         "stockSymbol":"TATASTEEL.BSE",
         "price":"773",
         "qty":89,
         "option":"buy"
         }
      }
   },
   {
      $set : { "fundsAvailable" : 999 }
   }
   
]).pretty()


// { $set : { "holdings.$" : { $inc: { "qty": -10} } } }


db.users.updateOne(
   {"_id":ObjectId("61ac032723176d376a96c00f")},
   [{
      $cond: {
       if: {
   
           $eq: ["holdings.stockSymbol","HDFCBANK.BSE"]
   
       },
       then: {
           $set: {
               "active": true
           }
       },
       else: {
           $set: {
               "active": false
           }
       }
      }
   }]
)
