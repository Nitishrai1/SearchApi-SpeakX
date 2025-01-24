// in this will will setup the mongodb to our mongodb compass and atlass
const mongoose=require("mongoose");
require('dotenv').config();

const mongourl=process.env.MONGODB

const connectdb= async () =>{
    try{
        await mongoose.connect(mongourl);

        console.log("Connection successfull");
    }catch(err){
        console.log("error in connecting to database",err)
    }
}

module.exports=connectdb;