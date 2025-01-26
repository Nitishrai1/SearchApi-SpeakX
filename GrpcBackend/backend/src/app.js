const connectdb=require("./db/db");
const startServer=require("./grpc/server")

connectdb();
startServer();