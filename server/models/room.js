const mongoose=require('mongoose');

const roomSchema=mongoose.Schema({

    titleName:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    imageurls:[],
},{
    timestamps:true,
} )

const roomModel=mongoose.model('rooms',roomSchema)
module.exports=roomModel