'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/user')(app, mongoose);
var UserCtrl = require('./controllers/users.controller');

var users = express.Router();
users.route('/users')
    .get(UserCtrl.findAllUsers)
    .post(UserCtrl.addUser);

users.route('/users/:id')
    .get(UserCtrl.findById)
    .put(UserCtrl.updateUser)
    .delete(UserCtrl.deleteUser);

app.use('/api', users);

var router = express.Router();
/*router.get('/', function(req, res) {
    res.send('Hello world');
});*/

app.use(router);
app.use('/public', express.static(__dirname + '/../public'));
/*console.log(__dirname + '../public/');
app.use(express.public(__dirname + '/../public/'));
*/



mongoose.connect('mongodb://localhost/users', function(err, res) {
    if(err) {
        console.log('Error connecting Database');
    }else {
        console.log('Connected to DataBase');
        app.listen(3000, function() {
            console.log('Node Server running on http://localhost:3000');
        });
    }
});

