module.exports = {
    // mongoURI: process.env.MONGO_URI,

    mongoURI:
        "mongodb+srv://umair:Pakistan008@@cluster0.untiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    secretOrKey: process.env.SECRET_OR_KEY,
};

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://umair:<password>@cluster0.untiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
