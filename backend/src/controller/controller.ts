const mongo = require ("../data/mongoConnection")

function index(req: any, res: any){
    let returnData = {
        name: "isra",
        age: 20
    }

    res.send(returnData);
}

module.exports = {index};