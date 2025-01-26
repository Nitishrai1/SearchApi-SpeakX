const express = require("express");
const connectdb = require("./Database/db");
const questionrequest=require("./routes/Question_request");
const app = express();
const cors=require("cors");

app.use(express.json());
app.use(cors());

// 

connectdb(); // Starting the connection to MongoDB

// Use the question routes
app.use("/api/questions",questionrequest ); // Prefix your routes

const PORT = process.env.PORT || 3000; // Use environment variable for port

app.listen(PORT, function () {
    console.log(`App listening at port ${PORT}`);
});