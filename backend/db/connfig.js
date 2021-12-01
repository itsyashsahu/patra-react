const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/patra",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:true,
    // useFindAndModify:true,
    // useCreateIndex:true,
    family:4,

}).then( ()=>{
    console.log(`connection is succesfull`);
}).catch( (e) =>{
    console.log(e);
})