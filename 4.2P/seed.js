const mongoose = require("mongoose");
const FoundItem = require("./models/foundItem");

const mongoUrl = "mongodb://127.0.0.1:27017/campusLostFoundDB";

const foundItems = [
    {
        itemName: "Student ID Card",
        imagePath: "images/student-id.svg",
        foundLocation: "Library entrance",
        dateFound: "22 July 2026",
        details: "A student ID card was found near the library entrance and handed to the campus service desk.",
        status: "FOUND"
    },
    {
        itemName: "Blue Water Bottle",
        imagePath: "images/water-bottle.svg",
        foundLocation: "Building B",
        dateFound: "21 July 2026",
        details: "A blue reusable water bottle was left beside a study table on the ground floor.",
        status: "FOUND"
    },
    {
        itemName: "Black Backpack",
        imagePath: "images/backpack.svg",
        foundLocation: "Computer lab",
        dateFound: "20 July 2026",
        details: "A black backpack was found under a desk after the afternoon computer lab session.",
        status: "FOUND"
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(mongoUrl);
        await FoundItem.deleteMany({});
        await FoundItem.insertMany(foundItems);
        console.log("Sample lost and found items added to MongoDB");
    } catch (error) {
        console.error("Unable to add sample data:", error.message);
    } finally {
        await mongoose.disconnect();
    }
};

seedDatabase();
