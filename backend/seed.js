// backend/seed.js
import mongoose from "mongoose";
import { Service } from "./model/Service.js";  // Import named export
import servicesData from "./data/servicesData.json" assert { type: "json" };

mongoose.connect('mongodb://localhost:27017/HometechHub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedData = async () => {
  try {
    await Service.deleteMany(); // Clear existing data
    await Service.insertMany(servicesData); // Insert new data
    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedData();