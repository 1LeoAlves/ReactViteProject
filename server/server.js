const express = require("express");
const app = express();
const wheaterRoute = require("./routes/WeatherEnd.js");

const port = 8080;

const corsPort = 3030;
const cors = require("cors");
const corsOption = {
    origin: [`http://localhost:${corsPort}`, `https://api.open-meteo.com`], /// Para permitir apenas de endereços confiavéis.
};

app.use(cors(corsOption));
app.use("/wheaterinfo", wheaterRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});