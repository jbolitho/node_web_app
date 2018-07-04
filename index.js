'use strict';
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const express = require('express');
const app = express();

// App
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(require('./controllers'));
app.use(require('./middlewares/user'))

app.listen(PORT, HOST, ()=>{
  console.log(`Running on http://${HOST}:${PORT}`);
});