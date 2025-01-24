// in this will will setup the mongodb to our mongodb compass and atlass
const mongoose=require("mongoose");
require('dotenv').config();

const MONGODB=process.env.mongodb

const connectdb= async () =>{
    try{
        await mongoose.connect(MONGODB);

        console.log("Connection successfull");
    }catch(err){
        console.log("error in connecting to database",err)
    }
}

module.exports=connectdb;