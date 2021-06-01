const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.json());
const mongoose = require("mongoose");
const createRouter = require("./helpers/create_router.js");
// const cors = require("cors");
// app.use(cors());
// const mongoCloudURI = require("./config/keys").mongoURI;
mongoose.connect(
    "mongodb+srv://umair:skyliner@cluster0.untiw.mongodb.net/weather?retryWrites=true&w=majority",
    function (err, client) {
        if (err) {
        } else {
            let collection = client.db.collection("favourites");
            let favouritesRouter = createRouter(collection);
            console.log(favouritesRouter);
            console.log("fav api");

            app.use("/api/favourites", favouritesRouter);
        }
    }
);
if (process.env.NODE_ENV == "production") {
    //set static folder - build use (it needs to be created before we load the client index.html file )
    app.use(express.static("client/build"));
    app.get("http://cbc-weather-app.herokuapp.com/", (req, res) => {
        // now load the client index.html file to send to the front end user
        console.log("Client Get request");
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// server port set =process.env.PORT-> will pick up server port when in deployed env.
const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Listening on port ${this.address().port}`);
});
