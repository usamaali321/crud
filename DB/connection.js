const mongoose = require('mongoose');

const URI='mongodb+srv://ali:123@cluster0.gcvge.mongodb.net/cluster0?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;