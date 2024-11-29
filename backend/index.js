import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import serviceRoutes from "./route/serviceRoute.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import paymentRoute from "./route/paymentRoutes.js";
import problemRoute from "./route/problem.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

connectDB();

// Routes
app.use("/users", userRoute);
app.use("/contact", contactRoute);
app.use("/services", serviceRoutes);
app.use("/public", express.static("public"));
app.use("/payments", paymentRoute);
app.use("/problems", problemRoute);

// Error Handling
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
