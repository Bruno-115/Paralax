const express = require('express');
const router = express.Router(); 
const {signup , login, updateMe} = require ('./userControl.cjs')

router.post('/cadastro', signup);
router.post('/login', login);
router.put('/popup/:id', updateMe);
module.exports = router;
