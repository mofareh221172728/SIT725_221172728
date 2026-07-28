const express = require("express");
const mongoose = require("mongoose");
const FoundItem = require("./models/foundItem");
const app = express();

const mongoUrl = "mongodb://127.0.0.1:27017/campusLostFoundDB";

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/items", async (req, res) => {
    try {
        const foundItems = await FoundItem.find({});

        res.json({
            statusCode: 200,
            data: foundItems,
            message: "Items retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            data: [],
            message: "Unable to retrieve items"
        });
    }
});

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB");

        app.listen(port, () => {
            console.log("App listening on port " + port);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

startServer();
