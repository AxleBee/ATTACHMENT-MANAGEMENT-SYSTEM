const feedbackSupervisor=require('../models/feedback');

module.exports.get_feedbackSupervisor=(req,res)=>{
    feedbackSupervisor.find().sort({date}).then(feedbackSupervisor=>res.json(feedbackSupervisor));

}

module.exports.post_feedbackSupervisor=(req,res)=>{
    const newfeedbackSupervisor =new feedbackSupervisor(req.body);
    new feedbackSupervisor.save().then(feedbackSupervisor=>res.json(feedbackSupervisor));
}

module.exports.update_feedbackSupervisor=(req,res)=>{
    feedbackSupervisor.findByIdAndUpdate({_id:req.params.id},req.body).then(function(feedbackSupervisor){
        feedbackSupervisor.findOne({_id:req.params.id}).then(function(feedbackSupervisor){
            res.json(feedbackSupervisor);
        });
    });
}

module.exports.delete_feedabckEmployer=(req,res)=>{
    attachdetails.findByIdAndDelete({id:req.params.id}).then(function(feedbackSupervisor){
        res.json({success:true})
    })
}