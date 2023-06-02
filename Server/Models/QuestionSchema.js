import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const QuestionModel = new Schema({
    Questions: { type: Array, default: [] }, // create question with [] default value
    Answers: { type: Array, default: [] },
    CreatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', QuestionModel);