const express = require('express')
  ,   router = express.Router()

router.use('/numbers', require('./numbers'))

router.get('/', (req, res)=>{
  res.render('index', {data: {title:'API', body:'API Response'}});
});

module.exports = router