import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    issue: { type: String, required: true },
   address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
