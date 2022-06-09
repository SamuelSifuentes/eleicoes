"use strict";
const mongo = require("../data/mongoConnection");
function index(req, res) {
    let returnData = {
        name: "isra",
        age: 20
    };
    res.send(returnData);
}
module.exports = { index };
