const express = require('express');
const doc = express();
const path = require('path');

// doc.use(express.urlencoded());
doc.use('/static', express.static('static')) // For serving static files

doc.set('view engine','pug');
doc.set('views', path.join(__dirname,'views'));

doc.get('/',(request, response)=>{
      response.render('index.pug');
});

doc.listen(5500,()=>{
      console.log("doc server started...");
});