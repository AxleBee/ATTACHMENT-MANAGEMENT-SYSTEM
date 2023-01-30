const feedbackEmployer=require('../models/feedback');

module.exports.get_feedbackEmployer=(req,res)=>{
    feedbackEmployer.find().sort({date}).then(feedbackEmployer=>res.json(feedbackEmployer));

}

module.exports.post_feedbackEmployer=(req,res)=>{
    const newfeedbackEmployer =new feedbackEmployer(req.body);
    new feedbackEmployer.save().then(feedbackEmployer=>res.json(feedbackEmployer));
}

module.exports.update_feedbackEmployer=(req,res)=>{
    feedbackEmployer.findByIdAndUpdate({_id:req.params.id},req.body).then(function(feedbackEmployer){
        feedbackEmployer.findOne({_id:req.params.id}).then(function(feedbackEmployer){
            res.json(feedbackEmployer);
        });
    });
}

module.exports.delete_feedabckEmployer=(req,res)=>{
    attachdetails.findByIdAndDelete({id:req.params.id}).then(function(feedbackEmployer){
        res.json({success:true})
    })
}