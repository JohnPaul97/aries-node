'use strict'
module.exports.formattedDate = formattedDate;
module.exports.test = test;

function formattedDate() {
    const now = new Date();
    const formattedDate = `${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDate()}`

    return formattedDate;
}

function test() {
    return "test";
}
