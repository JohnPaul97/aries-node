'use strict'

function concatCollections(prop1, prop2) {
    return function (req, res, next) {

        console.log("concat")
        const firstCollection = req.resources[prop1];
        const secondCollection = req.resources[prop2];

        req.resources.reports = firstCollection.concat(secondCollection);
        next();
    }
}

function responseToJSON(prop) {
    return function (req, res, next) {
        return res.json(req.resources[prop]);
    }
}

module.exports = {
    responseToJSON: responseToJSON,
    concatCollections: concatCollections
}
