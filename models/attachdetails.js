const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const AttachdetailsSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    Company:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    }
});

module.exports=Attachdetails=mongoose.model('Attachdetails',AttachdetailsSchema);