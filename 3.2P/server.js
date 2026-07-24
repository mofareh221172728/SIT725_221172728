const express = require("express");
const app = express();

const foundItems = [
    {
        title: "Student ID Card",
        image: "images/student-id.svg",
        location: "Library entrance",
        foundDate: "22 July 2026",
        description: "A student ID card was found near the library entrance and handed to the campus service desk."
    },
    {
        title: "Blue Water Bottle",
        image: "images/water-bottle.svg",
        location: "Building B",
        foundDate: "21 July 2026",
        description: "A blue reusable water bottle was left beside a study table on the ground floor."
    },
    {
        title: "Black Backpack",
        image: "images/backpack.svg",
        location: "Computer lab",
        foundDate: "20 July 2026",
        description: "A black backpack was found under a desk after the afternoon computer lab session."
    }
];

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/items", (req, res) => {
    res.json({
        statusCode: 200,
        data: foundItems,
        message: "Items retrieved successfully"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App listening on port " + port);
});
