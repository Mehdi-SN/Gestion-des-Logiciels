const mongoose = require('mongoose');


const logiciel3Schema = mongoose.Schema({
    name : { type : String, required: true },
    imageUrl: { type: String, required: false },
    description: { type: String, required: true },
});


module.exports = mongoose.model('Logiciel', logiciel3Schema);
