const mongoose = require("mongoose");

const formschema = mongoose.Schema({

})

const formModel = mongoose.model('forms', formschema);

module.exports = formModel;