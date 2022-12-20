const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ keepAlive: Date.now() })
})

app.listen(3003, () => { console.log("App Running: http://localhost:3003") })