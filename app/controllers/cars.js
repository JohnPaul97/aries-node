'use strict'
const Car = require('../models/cars');

function getCarById(req, res, next){
    // Car.find({_id:req.params.id}, function(err, response){
    //     if(err){
    //         return next({err: err});
    //     }

    //     return res.json({data: response});
    // })
    Car
        .find()
        .populate('user', 'name email')
        .exec(function(err, result){
            if(err){
                return next(err);
            }

            return res.json({data: result});
        })
}

function getCars(req, res, next){
    Car
        .find()
        .populate('user', 'name')
        .exec(function(err, result){
            if(err){
                next(err);
            }

            return res.json({data: result});
        })
}

function saveCar(req, res, next){
    const car = new Car({name: req.body.name, manufacturer: req.body.email, year: req.body.year, user:req.body.user});
   
    car.save(function(err, response){
        if(err){
            return next({err: err});
        }

        return res.json({data: response});
    })
}

module.exports = {
    getCar: getCarById,
    saveCar: saveCar,
    getCars: getCars
}
