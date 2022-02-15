const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const groupController = require('../controllers/groupController.js');


router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.createOne);
// router.post(':id/join/:groupId', groupController.join);
router.put('/:id', userController.updateOne);
router.delete('/:id', userController.deletOne);


module.exports = router;