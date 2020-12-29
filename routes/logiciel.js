const express = require('express');
const router = express.Router();
const logicielCtrl = require('../controllers/logiciel');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');




router.post('/', auth, logicielCtrl.createLogiciel);
router.get('/', auth, logicielCtrl.getAllLogiciels);
router.put('/:id', auth, logicielCtrl.modifyLogiciel);
router.get('/:id', auth, logicielCtrl.getOneLogiciel);
router.delete('/:id', auth,  logicielCtrl.deleteLogiciel);
router.delete('/', auth, logicielCtrl.deleteALL);


module.exports = router;

