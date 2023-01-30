const {Router} =require('express');
const logbookController=require('../controllers/logbookController');
const router=Router();

router.get('/logbook',logbookController.get_logbook);
router.post('/logbook',logbookController.post_logbook);
router.put('/logbook/:id',logbookController.update_logbook);
router.delete('/logbook/:id',logbookController.delete_logbook);

module.exports=router;