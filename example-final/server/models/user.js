'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = new Schema({

    name: { type: String },
    surname: { type: String },
    email: { type: String },
    photo: { type: String },
    role: { type: String, enum:
        ['Administrator','Registered-User']
    },
    description: { type: String }
});

module.exports = mongoose.model('User', userSchema);