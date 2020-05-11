'use strict'
const path = require('path');

module.exports.init = initRoutes;

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes'); //__dirname - absolute path to this file
    
    console.log(__dirname)
    console.log(routesPath)
    const routes = ['users','cars'];

    routes.forEach(route => {
        app.use(require(routesPath + '/' + route)); //API is important
    });
}
