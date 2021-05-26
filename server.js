const express = require("express");
const app = express();
const path = require();

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
// if the node env is production then set static folder for React(front-end)
if (process.env.NODE_ENV == "production") {
    //set static folder - build use (it needs to be created before we load the client index.html file )
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        // now load the client index.html file to send to the front end user
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// server port set =process.env.PORT-> will pick up server port when in deployed env.
const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Listening on port ${this.address().port}`);
});
