const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const LogbookSchema =new Schema({
    Day:{
        type:String,
        required:true
    },
    Activity:{
        type:String,
        required:true
    },
    date_added:{
        type:Date,
        default:Date.now
    }
})

module.exports= Logbook=mongoose.model('Logbook',LogbookSchema)