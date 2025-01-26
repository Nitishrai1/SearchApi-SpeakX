const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const {allquestions} = require("../model/questions");
const path = require("path");
const { searchQuestions } = require("../services/SearchQuestionService");
// console.log(allquestions);

// proto file ko load kar lete hai
const proto_path = __dirname + "/proto/question.proto";

const packageDefinition = protoLoader.loadSync(proto_path, {});
const proto = grpc.loadPackageDefinition(packageDefinition).Questionservice; //question service ko load kar diye hai package me

// console.log(proto);
const Questionservice = proto.Questionservice;
if (!Questionservice) {
    console.log("error in service");
}


const startServer = () => {
    const server = new grpc.Server();
    // Corrected: Register the entire service instead of the individual method
    server.addService(Questionservice.service, { SearchQuestions: searchQuestions });

    server.bindAsync(
        `0.0.0.0:50051`,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) throw err;
            console.log(`gRPC server running on port ${port}`);
            
        }
    );
};

module.exports = startServer;
