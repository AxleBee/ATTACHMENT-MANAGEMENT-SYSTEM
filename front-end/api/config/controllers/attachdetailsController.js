const attachdetails =require('../models/attachdetails');

module.exports.get_attachdetails=(req,res)=>{
    attachdetails.find().sort({Title}).then(attachdetails=>res.json(attachdetails));
}

module.exports.post_attachdeatils=(req,res)=>{
    const newattachdetails=new attachdetails(req.body);
    newattachdetails.save().then(attachdetails=> res.json(attachdetails));
}

module.exports.update_attachdetails=(req,res)=>{
    attachdetails.findByIdAndUpdate({_id:req.params.id},req.body).then(function(attachdetails){
        attachdetails.findOne({_id:req.params.id}).then(function(attachdetails){
            res.json(attachdetails)
        });
    });
}

module.exports.delete_attachdetails=(req,res)=>{
    attachdetails.findByIdAndDelete({id:req.params.id}).then(function(attachdetails){
        res.json({success:true})
    })
}