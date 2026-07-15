const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/addTwoNumbers", function (req, res) {
    const number1 = parseFloat(req.query.number1);
    const number2 = parseFloat(req.query.number2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.json({
            error: "Please provide two valid numbers using number1 and number2."
        });
    }

    const result = number1 + number2;

    res.json({
        number1: number1,
        number2: number2,
        result: result
    });
});

app.listen(port, function () {
    console.log("Express server is running at http://localhost:" + port);
});