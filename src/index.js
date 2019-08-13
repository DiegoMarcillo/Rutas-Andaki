const express = require('express');
const morgan = require('morgan');
const path =  require('path');

const app = express();

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// middlewares 

// routes
app.get('/',(req,res)=>{
     res.render('index',{title: 'Rutas Andaki'});
  });


// static files

// listener in server
app.listen(app.get('port'), ()=>{
     console.log('Server on ports '+app.get('port'));
})
