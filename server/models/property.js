const mongoose = require("mongoose");

const propertyschema = mongoose.Schema({
  
  userId: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "user",
	},

  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  gender : {type : String, required : true},
  email : {type : String, required : true},
  phoneno : {type : Number, required : true},

  propertyname : { type : String  },
  priceprefix : { type : String  },
  
  desc : { type : String},
  location : { type : String },
  area : { type : String},

  country: { type : String, default : 'Nepal', required : true},
  province: { type : String , required : true},
  district: { type : String, required : true },
  municipalityorvdc : { type : String, required : true },
  wardno : { type : Number, required : true},
  streetortole : { type : String, required : true},

  category: { type : String, required: true},
  description : { type : String, required : true},
  roomno : { type : Number, required : true},
  bhk : { type : Number, required : true},
  bathno : { type : Number, required : true},
  price : { type : Number , required : true },
  watersupply : { type : String , required : true},
  electricity : { type : String , required : true},
  parking : { type : String , required : true},
  lift : { type : String , required : true},
  
  longitude:{type: Number, required: true},
  latitude:{type: Number, required: true},

  garden : { type : String , required : true},
  terrace : { type : String , required : true},
  tenantemployed : { type : String , required : true},
  tenantmarried : { type : String , required : true},
  lookingfor : { type : String, required : true},
  minimumtenure : { type : String, required : true},
  img: {type: Array},
  currentbookings : {type : Array}
},
{ timestamps: true }
);

const propertyModel = mongoose.model('properties', propertyschema);

module.exports = propertyModel;