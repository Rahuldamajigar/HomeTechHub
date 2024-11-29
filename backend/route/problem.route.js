import express from "express";
import Problem from "../model/Problem.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, number, issue, address } = req.body;

    if (!name || !email || !number || !issue || !address) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const newProblem = new Problem({ name, email, number, issue, address });
        await newProblem.save();
        console.log("Problem saved:", newProblem);

        res.status(201).json({ message: "Problem submitted successfully! We will Contact you soon!" });
    } catch (error) {
        console.error("Error saving problem:", error);
        res.status(500).json({ message: "Failed to save the problem." });
    }
});

export default router;
