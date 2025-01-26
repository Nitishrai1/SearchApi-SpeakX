const { allquestions } = require("../model/questions");

// gRPC service method implementation
const searchQuestions = async (call, callback) => {
    const { query } = call.request;

    try {
        console.log("Received query:", query);

        // Search the database with regex
        const result = await allquestions.find({
            title: { $regex: query, $options: "i" }, // case-insensitive search
        }).limit(10);

        const finalres = result.map((question) => ({
            title: question.title,
            type: question.type,
        }));

        console.log("Search results:", finalres);

        // Send response back to client
        callback(null, { finalres });
    } catch (err) {
        console.error("Error in fetching database:", err.message);
        callback(err); // Return the error to the gRPC client
    }
};

module.exports = { searchQuestions };
