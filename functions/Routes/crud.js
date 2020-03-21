const router = require('express').Router();
const crud = require('../Controllers/crud');
const authenticate = require('./auth');

router.post('/', authenticate, crud.create);
router.get('/', authenticate, crud.all);
router.get('/:id', authenticate, crud.one);

module.exports = router;
