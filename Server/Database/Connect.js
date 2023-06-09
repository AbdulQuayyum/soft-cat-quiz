import mongoose from "mongoose";

export default async function Connect() {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected")
}