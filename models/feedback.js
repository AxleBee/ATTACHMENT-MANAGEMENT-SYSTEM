const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema =new Schema({
    Feedback:{
        type:String,
        required:true
    },
    date_added:{
        type:Date,
        default:Date.now
    }
})

module.exports= Feedback=mongoose.model('Feedback',FeedbackSchema);