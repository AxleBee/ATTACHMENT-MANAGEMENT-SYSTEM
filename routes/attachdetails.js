const{Router}=require('express');
const AttachdetailsController=require('../controllers/attachdetailsController');

const router =Router();

router.post('/attachdetails',AttachdetailsController.post_attachdeatils);
router.get('/attachdetails',AttachdetailsController.get_attachdetails);
router.put('/attachdetails/:id',AttachdetailsController.update_attachdetails);
//router.delete('/attachdetails/:id',AttachdetailsController.delete_attachdetails);

module.exports=router;