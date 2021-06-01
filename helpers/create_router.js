const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
    const router = express.Router();

    router.get("/", (req, res) => {
        console.log("get API request");

        collection
            .find()
            .toArray()
            .then((docs) => {
                let result = docs.map((eachDocs) => {
                    return { name: eachDocs["name"] };
                });
                let final = JSON.stringify(result);

                return res.send(final);
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.post("/", (req, res) => {
        const newData = req.body;
        console.log("post api request");

        console.log(req.body);
        collection
            .insertOne(newData)
            .then((result) => {
                res.json(result.ops[0]);
            })
            .catch((err) => {
                console.error(err);
                res.status(400);
                res.json({ status: 400, error: err });
            });
    });

    router.put("/:id", (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        delete updatedData._id;

        collection
            .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.delete("/:id", (req, res) => {
        const id = req.params.id;
        console.log(id);
        collection
            .deleteOne({ name: id })
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });
    console.log("API call return statement");
    return router;
};

module.exports = createRouter;
