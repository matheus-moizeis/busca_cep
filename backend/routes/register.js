const express = require('express');
const router = express.Router();

const controller = require('../controllers/register');

router.get('/', controller.get);
router.get('/:id', controller.getOne);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);

module.exports = router