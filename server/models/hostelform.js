const mongoose = require("mongoose");

const hostelformschema = mongoose.Schema({
  userId: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "user",
	},
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "property",
  },

  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  roomtype : {type : String, required : true},
  gender : {type : String, required : true},
  dob : {type : String, required : true},
  school : {type : String, required : true},
  email : {type : String, required : true},
  phoneno : {type : Number, required : true},

  guardianname : {type : String, required : true},
  relation : {type : String, required : true},
  address : {type : String, required : true},
  gphoneno : {type : Number, required : true},
  
  lguardianname : {type : String, required : true},
  lrelation : {type : String, required : true},
  laddress : {type : String, required : true},
  lphoneno : {type : Number, required : true},
  
  pcountry : {type : String, required : true , default: 'Nepal'},
  pprovince : {type : String, required : true},
  pdistrict : {type : String, required : true},
  pmunicipalityorvdc : {type : String, required : true},
  pwardno : {type : Number, required : true},
  ptolorstreet : {type : Number, required : true},

  tcountry : {type : String, required : true , default: 'Nepal'},
  tprovince : {type : String, required : true},
  tdistrict : {type : String, required : true},
  tmunicipalityorvdc : {type : String, required : true},
  twardno : {type : Number, required : true},
  ttolorstreet : {type : Number, required : true},
  
  passportphoto : {type : Array, required : true},
  citizenship : {type : Array, required : true},

})

const formModel = mongoose.model('hostelforms', hostelformschema);

module.exports = formModel;