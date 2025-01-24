// in this will will setup the mongodb to our mongodb compass and atlass
const mongoose=require("mongoose");

const mongodb = "mongodb+srv://nitishraigkp007:64QNOF2gy9iNQSPF@searchapidb.dzcr2.mongodb.net/Questions";
const connectdb= async () =>{
    try{
        await mongoose.connect(mongodb);

        console.log("Connection successfull");
    }catch(err){
        console.log("error in connecting to database",err)
    }
}

module.exports=connectdb;