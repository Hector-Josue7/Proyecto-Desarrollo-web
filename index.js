var express = require("express");
var mysql      = require('mysql');
var app = express();
//var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
app.use(bodyParser.json())

//app.use(cookieParser());
//Exponer una carpeta como publica, unicamente para archivos estaticos: .html, imagenes, .css, .js
app.use(express.static("public"));
//Crear y levantar el servidor web.
var credenciales = {
   user: "root",
   password:"",
   database:"bd_proyectoi",
   host:"localhost",
  
};
var conexion = mysql.createConnection(credenciales);


  conexion.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

 app.get("/guardar",function(req,res){
   var conexion = mysql.createConnection(credenciales);
   conexion.query("INSERT INTO Usuarios(nombre, apellido,correo, contrasena, plan) VALUES (?,?,?,?,?)",
       [req.query.nombre, req.query.apellido, req.query.correo, req.query.contrasena, req.query.plan],
       function(error, result){
         if(error){
            throw error;
         }else{
            console.log(result);
         }
       }
   );
});



conexion.end();
  

app.listen(8111, function(){
  console.log("El servidor esta arriba");
});





