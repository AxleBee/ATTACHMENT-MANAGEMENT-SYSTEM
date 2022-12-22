const logbook=require('../models/logbook');

module.exports.get_logbook =(req,res)=>{
    logbook.find().sort({date:-1}).then(logbook=>res.json(logbook));
}

module.exports.post_logbook=(req,res)=>{
    const newRecord=new Record(req.body);
    newRecord.save().then(Record=>res.json(Record));

}

module.exports.update_logbook=(req,res)=>{
    logbook.findByIdAndUpdate({_id:req.params.id},req.body).then(function(logbook){
        logbook.findOne({_id:req.params.id}).then(function(logbook){
            res.json(logbook)
        });
    });
}
module.exports.delete_logbook=(req,res)=>{
    logbook.findByIdAndDelete({_id:req.params.id}).then(function(logbook){
        res.json({success:true});
    })
}