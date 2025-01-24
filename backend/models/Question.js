// in this file we will define the model of the database

const mongoose=require("mongoose");


// the below schema is for the block of array which is present in the question schema
const blockSchema = new mongoose.Schema({
  text: { type: String, required: true },
  showInOption: { type: Boolean, required: true },
  isAnswer: { type: Boolean, required: true },
});


// this is the schema of the questions which is in the json file
const questionSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  anagramType: { type: String, required: false }, 
  title: { type: String, required: true }, 
  blocks: [blockSchema], 
  siblingId: { type: mongoose.Schema.Types.ObjectId, required: false },
  solution: { type: String, required: true },
});

const allquestions = mongoose.model("allquestions", questionSchema);
module.exports = {allquestions};
