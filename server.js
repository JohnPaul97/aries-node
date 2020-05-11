'use strict'

const express = require('express');
const app = express();

const config = require('./config/index'); //daca nu punem /index cauta default index.js

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

app.all('*', function(req, res, next){
    console.log('final mid');
    res.status(404).json({
        status: 'fail',
        message: `No such page ${req.url}`
    });
    // next();
})

//generic middleware for errors
app.use(function(err, req, res, next) {
    console.log('err', err);
    
    return res.status(400).json({
        status: 'Error',
        message: err && err.message || 'Default error'
    })
})

//init server
app.listen(config.PORT, function(){
    console.log('API port on ' + config.PORT);
});
