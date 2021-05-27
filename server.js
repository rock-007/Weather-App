const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.json());
// const cors = require("cors");
// app.use(cors());

const mongoose = require("mongoose");
const createRouter = require("./helpers/create_router.js");

const mongoCloudURI = require("./config/keys").mongoURI;
//MongoClient.connect("mongodb://localhost:27017")
console.log("xx", mongoCloudURI);
// const client = new MongoClient(mongoCloudURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

mongoose.connect(
    "mongodb+srv://umair:skyliner@cluster0.untiw.mongodb.net/weather?retryWrites=true&w=majority",
    function (err, client) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            console.log("Connection established to", client);
            let collection = client.db;
            let favourites = collection.collection("favourites");
            // const favouritesCollection = db.collection("favourites");
            const favouritesRouter = createRouter(favourites);
            console.log("xxxx11x", favouritesRouter);
            console.log("ccx", favourites);

            app.use("api/favourites", favouritesRouter);
        }
    }
);
// const MongoClient = require('mongodb').MongoClient;
//     const uri = "mongodb+srv://umair:Pakistan008@@cluster0.untiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//       const collection = client.db("test").collection("devices");
//       // perform actions on the collection object
//       client.close()

// client.connect((err) => {
//     const collection = client.db("weather").collection("favourites");
//     // perform actions on the collection object
//     const favouritesRouter = createRouter(favouritesCollection);
//     app.use("/api/favourites", favouritesRouter);
//     client.close();
// });
// client
//     .connect(mongoCloud)
//     .then((client) => {
//         const db = client.db("weather");
//         const favouritesCollection = db.collection("favourites");
//         const favouritesRouter = createRouter(favouritesCollection);
//         app.use("/api/favourites", favouritesRouter);
//     })

//     .catch(console.err);
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
