
var express = require("express");
var mysql      = require('mysql');
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();
var credenciales = {
   user: "root",
   password:"",
   database:"bd_proyectoii",
   host:"localhost",
   port:"3306"
  
};
app.use(express.static("public"));
app.use(bodyParser.json())
//var cookieParser = require('cookie-parser');


// POST / login obtiene cuerpos urlencoded
app.post('/login.html', urlencodedParser, function (req, res) {
   if (!req.body) return res.sendStatus(400)
   res.send('Bienvenido, ' + req.body.username)
 })
  


//app.use(cookieParser());
//Exponer una carpeta como publica, unicamente para archivos estaticos: .html, imagenes, .css, .js

//Crear y levantar el servidor web.

//var path_nombre = (url.parse(peticion.url).pathname == '/') ? '/index.html' : url.parse(peticion.url).pathname;
/*Esta variable preguntará si el pathname es ‘/’ lo que significa que el visitante está en la página principal, 
en este caso forzaremos a que path_nombre sea ‘/index.html’, que es el archivo principal. De lo contrario guardará el pathname 
así como lo encuentra.*/ 

//var ruta_a_archivo = 'contenido/' + path_nombre;
/*guardamos una variable con la ruta al archivo que tendremos que leer:
Recordar que en la carpeta contenido se encuentran los archivos .html.
*/


var conexion = mysql.createConnection(credenciales);
 conexion.connect(function(error){
   if(error){
     throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });
app.get("/formulario-registro.html",function(req,res){
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
  
app.use(function(req, res, next) {
   res.status(404).send('Lo siento no puedo encontrar eso!');
 });

app.listen(8111, function(){
  console.log("El servidor esta arriba");
});



//************************************************************************* */

/*var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(peticion, respuesta){
   var path_nombre = (url.parse(peticion.url).pathname == '/') ? '/index.html' : url.parse(peticion.url).pathname;
   var ruta_a_archivo = 'contenido/' + path_nombre;
   fs.exists(ruta_a_archivo, function(existe){
      if(existe){
         fs.readFile(ruta_a_archivo, function(error, contenido_archivo){
            if(error){
               respuesta.writeHead(500, 'text/plain');
               respuesta.end('Error interno.');
            }else{
               respuesta.writeHead(200, {'Content-Type': 'text/html'});
               respuesta.end(contenido_archivo);
            }
         });
      }else{
         respuesta.writeHead(404, 'text/plain');
         respuesta.end('Error 404. El enlace no existe o ha dejado de existir.');
      }
   });
}).listen(3000, '127.0.0.1');
console.log('El servidor esta funcionando correctamente en https://localhost:3000/'); */



