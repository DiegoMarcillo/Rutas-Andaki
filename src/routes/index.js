const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
     res.render('index.html',{title: 'Rutas Andaki'});
  });

router.get('/about',(req,res)=>{
   res.render('about.html',{title: 'Quienes Somos'});
});

router.get('/contact', (req, res)=>{
   res.render('contact.html',{title: 'Contacto'});
});
  module.exports = router;