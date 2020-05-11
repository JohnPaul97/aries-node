const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Car = new Schema({
    name: {
        type: String,
        required: [true, 'Car type is required']
    },
    manufacturer: String,
    year: {
        type: Number,
        required: [true, 'Car year is required']
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('car', Car, 'cars');
