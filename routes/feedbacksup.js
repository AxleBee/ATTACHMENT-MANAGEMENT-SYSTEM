const{Router}=require('express');
const FeedbackSupController=require('../controllers/feedbacksupController');

const router =Router();

router.post('/feedbackSupervisor',FeedbackSupController.post_feedbackSupervisor);
router.get('/feedbackSupervisor',FeedbackSupController.get_feedbackSupervisor);
router.put('/feedbackSupervisor/:id',FeedbackSupController.put_feedbackSupervisor);
router.delete('/feedbackSupervisor/:id',FeedbackSupController.delete_feedbackSupervisor);

module.exports=router;