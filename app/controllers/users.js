'use strict'

const User = require('../models/users');

/**
 * Module exports
 */
module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    createUsers: createUsers,
    updateUsers: updateUsers,
    deleteUsers: deleteUsers
}

function getUsers(req, res, next){
    console.log('GET users from controller');
    
    User.find(function(err, result) {
        if(err){
            return res.status(400).json({
                status: 'Error',
                message: 'On get users'
            })
            // console.log(err);
        }

        return res.json({data: result});
    })
}

function getUserById(req, res, next){
    console.log("GET user by id");
    console.log("params:" , req.params);
    console.log("query:" , req.query);

    // User.findById(req.params.id, function(err, result) {
    //     if(err) {
    //         console.log(err);
    //     }

    //     return res.json({data: result});
    // })

    User.find({_id: req.params.id}, function(err, result) {
        if(err) {
            console.log(err);
        }

        return res.json({data: result});
    })
}

function createUsers(req, res, next){
    console.log('POST users from controller');
    console.log('POST received ' + req.body);

    const user = new User({name: req.body.name, email: req.body.email});

    user.save(function(err,response){
        if(err){
            return res.status(400).json({
                status: 'Error',
                message: 'On create users'
            })
            // console.log(err);
        }

        return res.json({data: response});
    })
    console.log('after save');
    // return res.json({message: 'message post'});
}

function updateUsers(req, res, next) {
    console.log('PUT users');

    User.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, response) {
        if(err){
            return next(err);
        }

        return res.json({data: response});
    })
}

function deleteUsers(req, res, next) {
    console.log('DELETE users');

    User.findOneAndDelete(req.params.id, function(err, response) {
        if(err) {
            console.log('err', err);
        }

        return res.json({data: response});
    })
    console.log('after delete');
}
