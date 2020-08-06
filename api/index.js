const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 5005;
let jsonParser = bodyParser.json();
app.use(cors());

app.use(jsonParser);
app.get("/api", (request, response) => {
    fs.readFile("../data.json", (err, data) => {
        if (err) throw err;
        let articles = JSON.parse(data);
        console.log(articles);
        response.json(articles).status(200);
    });
});

app.post("/api", (request, response) => {
    console.log("Storing this data: ", request.body);
    response.send("ok");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
