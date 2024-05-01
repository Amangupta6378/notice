const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MongoDb connected Successfully.")
    })
    .catch((error)=>{
        console.log("Error in MongoDb connection.");
        console.error(error);
        process.exit(1);
    })
}
