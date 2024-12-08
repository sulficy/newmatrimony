const mongoose =require('mongoose')
// require('dotenv').config()

// Load environment variables
// dotenv.config();

const connection_String = process.env.connectionString;

mongoose.connect(connection_String).then(res=>{
    console.log("pf server connected with mongodb");
    
}).catch((err)=>{
console.log("error" +err);

})

//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("pfServer connected to MongoDB");
// }).catch((error) => {
//     console.error("MongoDB connection error:", error);
// });
