'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findAllUsers = function(req, res) {
    User.find(function(err, users) {
        if(err) return res.send(500, err.message);

        console.log('GET /users');
        return res.status(200).jsonp(users);
    });
};

exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(err) return res.send(500, err.message);

        console.log('GET /users/' + req.params.id);
        return res.status(200).jsonp(user);
    });
};


exports.addUser = function(req, res) {
    console.log('POST');

    var user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        photo: req.body.photo,
        role: req.body.role,
        description: req.body.description
    });

    user.save(function(err, user) {
        if(err) return res.status(500).send(err.message);
        return res.status(200).jsonp(user);
    });
};

exports.updateUser = function(req, res) {
    console.log('PUT');

    User.findById(req.params.id, function(err, user) {
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.email = req.body.email;
        user.photo = req.body.photo;
        user.role = req.body.role;
        user.description = req.body.description;

        user.save(function(err) {
            if(err) return res.status(500).send(err.message);
            return res.status(200).jsonp(user);
        });
    });
};

exports.deleteUser = function(req, res) {
    User.findById(req.params.id, function(err, user){
        user.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            return res.status(200).send();
        });
    });
};