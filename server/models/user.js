const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
  email : { type: String, required: true },
  password : { type: String, required: true},
  username : { type: String, required: true, unique: true},
  isAdmin : { type: Boolean, default: false},  
  verified : { type: Boolean, default: false},

  firstname : { type: String},
  lastname : { type: String},
  gender : {type: String},
  dob : { type: String},
  phoneno : { type: Number},
  age : { type: Number},
  country : { type: String, default: 'Nepal'},
  province : { type: String},
  district : { type: String},
  municipalityorvdc : { type: String},
  wardno : { type: Number},
  streetortol : { type: Number},
  
  occupation : { type: String},
  smoker : { type: String},
  alcoholic : { type: String},
  pets : { type: String},
  veg : { type: String},
  ebno : { type: String},
  parking : { type: String},
  partying : { type: String},
  married : { type: String},
  photo: {type: Array},

  wishlist : {type : Array},
  currentbooking : {type : Array}
} , {
  timestamps: true
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;