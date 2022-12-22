const{Router}=require('express');
const FeedbackEmController=require('../controllers/feedbackemController');

const router =Router();

router.post('/feedbackEmployer',FeedbackEmController.post_feedbackEmployer);
router.get('/feedbackEmployer',FeedbackEmController.get_feedbackEmployer);
router.put('/feedbackEmployer/:id',FeedbackEmController.put_feedbackEmployer);
router.delete('/feedbackEmployer/:id',FeedbackEmController.delete_feedbackEmployer);

module.exports=router;