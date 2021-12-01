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




 db.runCommand({collMod:"user", 
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
              required:["stockSymbol","stockName","qty","buyPrice","date"],
                properties:{
                   stockSymbol:{
                      bsonType:"string",
                      description:"this is the symbol of the stock ",
                      unique:true
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

db.user.updateOne({},{ $push: { watchlists:{  "stockName":"asdlkfjasdf",
                                             "stockSymbol":876 } } } )
                                             