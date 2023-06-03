import mongoose from "mongoose";
const { Schema } = mongoose

const ResultModel = new Schema({
    UserName: { type: String },
    Result: { type: Array, default: [] },
    Attempts: { type: Number, default: 0 },
    Points: { type: Number, default: 0 },
    Achieved: { type: String, default: '' },
    CreatedAt: { type: Date, default: Date.now }
})

export default mongoose.model("Results", ResultModel)