/*
exports.get_identificacion = function(req, res){
    res.render('sesiones/identificacion');
 };
 exports.post_identificacion = function(req, res){
    req.session.nombre = req.body.nombre;
    res.redirect('/bienvenida');
 };
 exports.bienvenida = function(req, res){
    if(req.session.nombre){
       res.render('sesiones/bienvenida', {nombre: req.session.nombre});
    }else{
       res.redirect('/identificacion');
    }
 };
 exports.salir = function(req, res){
    req.session.nombre = null;
    res.redirect('/identificacion');
 };
 */
var express = require("express");
var router = express.Router();

router.get("/agregar",function(req, res){
    res.send("Agregar un usuario");
});

router.get("/eliminar",function(req, res){
    res.send("Eliminar un usuario");
});


router.get("/almacenar-sesion/:usuario",function(req, res){
   req.session.usuario = req.params.usuario;
   res.send("Se guardo la sesion");
   res.end();
});

router.get("/obtener-sesion",function(req, res){
   res.send("La sesion almacenada es : " + req.session.usuario);
   res.end();
});


router.get("/obtener-session",function(req,res){
   res.send("Codigo Usuario: " + req.session.codigoUsuario+
           ", Correo: " + req.session.correoUsuario +
           ", Tipo Usuario: " + req.session.codigoTipoUsuario
   );
   res.end();
});

module.exports = router;
