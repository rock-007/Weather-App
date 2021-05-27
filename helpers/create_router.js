const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
    const router = express.Router();

    router.get("/", (req, res) => {
        console.log("yyyyyyyyyyyyyyyyyyyyyy");
        collection
            .find()
            .toArray()
            .then((docs) => {
                console.log("9990", docs);
                let result = docs.map((eachDocs) => {
                    console.log(eachDocs);
                    return { name: eachDocs["name"] };
                });
                console.log("9991", result);

                return res.json([{"a":"result"}]);
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.post("/", (req, res) => {
        const newData = req.body;
        console.log("xxxxxxxxx");

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

    return router;
};

module.exports = createRouter;
