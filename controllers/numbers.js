const express = require('express')
  ,   router = express.Router()
  ,   Numbers = require('../models/numbers')

router.get('/random/:someNumber', (req, res)=>{
  res.json( {randomNumber: Numbers.getRandom(req.params.someNumber)});
});

module.exports = router