const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
        const db = client.db("weather");
        const favouritesCollection = db.collection("favourites");
        const favouritesRouter = createRouter(favouritesCollection);
        app.use("/api/favourites", favouritesRouter);
    })

    .catch(console.err);

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`);
});
