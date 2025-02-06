const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = {
    origin: ["http://localhost:3030"], /// Para permitir apenas de um endereço.
};

app.use(cors(corsOption));

app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "orange", "banana"]});
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});