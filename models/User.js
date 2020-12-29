const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchemaBd = mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchemaBd.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchemaBd);
