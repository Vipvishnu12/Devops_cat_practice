const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("AWS Demo Backend Running 🚀");
});

app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "Hello from backend"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server runnrrghing on port ${PORT}`);
});