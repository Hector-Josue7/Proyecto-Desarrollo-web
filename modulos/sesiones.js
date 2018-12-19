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

module.exports = router;
