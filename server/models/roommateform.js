const mongoose = require("mongoose");

const roommateformschema = mongoose.Schema({


  name : {type : String, required : true},
  age : {type : Number, required : true},
  price : {type : Number, required : true},
  gender : {type : String, required : true},
  type : {type : String, required : true},
  email : {type : String, required : true},
  phoneno : {type : Number, required : true},
  country : {type : String, required : true, default : "Nepal"},
  province : {type : String, required : true},
  district : {type : String, required : true},
  municipalityorvdc : {type : String, required : true},
  wardno : {type : Number, required: true},
  tolstreet : {type : String, required: true},
  desc : {type : String, required : true},
  photo : {type : Array, required : true},

  minage : {type : Number, required : true},
  maxage : {type : Number, required : true},
  poccupation : {type : String, required : true},
  pgender : {type : String, required : true},
  parking : {type : String, required : true},
  psmoker : {type : String, required : true},
  palcoholic : {type : String, required : true},
  ppets : {type : String, required : true},
  pebno : {type : String, required : true},
  ppartying : {type : String, required : true},
  pmarried : {type : String, required : true},
  pveg : {type : String, required : true},


  // occupation : {type : String, required : true},

  bedroom : {type : Number, required : true},
  bathroom : {type : Number, required : true},
  kitchen : {type : Number, required : true},
  watersupply : {type : String, required : true},
  gardenorterrace : {type : String, required : true},
  furnishing : {type : String, required : true},
  electricity : {type : String, required : true},
  wifi : {type : String, required : true},
  roomphoto : {type : Array, required : true},

  // smoker : {type : String, required : true},
  // anypets : {type : String, required : true},
  // ebno : {type : String, required : true},
  // partying : {type : String, required : true},
  // alcoholic : {type : String, required : true},
  // married : {type : String, required : true},
  // veg : {type : String, required : true},

 
  location : {type : String, },




})

const formModel = mongoose.model('roommateforms', roommateformschema);

module.exports = formModel;