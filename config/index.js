'use strict'

const ENV = process.env.NODE_ENV || 'development';
const config = require('./environments/' + ENV.toLowerCase());
console.log('ENV', ENV);

module.exports = config;
