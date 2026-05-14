const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("AWS rerererrrr4r34r34r3434343443433434ere Bacjkhgfdkend Running 🚀");
});

app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "Hello eeeeefccrom backend"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server erereere on port ${PORT}`);
});