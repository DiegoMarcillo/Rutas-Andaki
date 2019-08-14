const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
     res.render('index.html',{title: 'Rutas Andaki', slogan: 'BIENVENIDOS'});
  });

router.get('/about',(req,res)=>{
   res.render('about.html',{title: 'Quienes Somos', mision: 'Una agencia operadora de turismo, que ofrece planes de turismo de naturaleza y aventura en el territorio Andaki, garantizando la satisfacción de los clientes gracias a la vivencia, goce y disfrute responsable de la biodiversidad del Piedemonte andino Amazónico y al profesionalismo del personal altamente calificado.'});
});

router.get('/contact', (req, res)=>{
   res.render('contact.html',{title: 'Contacto'});
});
  module.exports = router;