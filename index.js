var express = require("express");
var mysql      = require('mysql');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var router = express.Router();
var session = require("express-session");
var usuarios = require("./modulos/sesiones");
var sesiones = require("./modulos/sesiones");
var fs = require('fs');

var app = express();
// MIDDLEWARES
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));



/*CONEXION A BASE DE DATOS */

var credenciales = {
    user: "root",
    password:"",
    database:"bd_proyecto",
    host:"localhost",
    port:"8111"
   
 };

 /*El módulo del sistema de archivos tiene métodos para crear nuevos archivos:

fs.appendFile()
fs.open()
fs.writeFile() */



  /*
    // Transformación de formato JSON a JavaScript
  var imagenes = JSON.parse(respuesta);
  console.log(imagenes); */

  /*A través de la función   JSON.parse  podemos transformar
   una cadena de caracteres con formato JSON en un objeto de 
   JavaScript. Por otro lado, la función  JSON.stringify 
    permite obtener el resultado inverso: transforma un objeto
   JavaScript en una cadena de texto con formato JSON. 
   
   La función  JSON.parse  permiten transformar información 
   en formato JSON en un objeto de JavaScript.

La función  JSON.stringify   permite transformar un objeto
 de JavaScript en formato JSON.


  var conexion = mysql.createConnection(credenciales);
  conexion.connect(function(err) {
   if (err) throw err;
   console.log("Conectado!");
   var sql = "INSERT INTO  Usuarios( ID_USUARIO,NOMBRE, APELLIDO,CORREO, CONTRASENA, FECHA_NACIMIENTO, PLAN) VALUES (?,?,?,?)";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
   });
 });
 
   */

  app.post("/enviar",function(req,res){
   var conexion = mysql.createConnection(credenciales);
   conexion.query(
       "INSERT INTO  USUARIOS( ID_USUARIO,NOMBRE, APELLIDO,CORREO, CONTRASENA, FECHA_NACIMIENTO, PLAN) VALUES (?,?,?,?,?,?)",
       [
           req.body.nombre,
           req.body.apellido,
           req.body.correo,
           req.body.contrasena,
           req.body.cumpleanos,
           req.body.plan
       ],
       function (err, result) {
         if (err) throw err;
         console.log("1 record inserted");
       });


});
app.get("/cerrar-sesion",function(req,res){
   req.session.destroy();
   res.send("Sesion eliminada");
   res.end();
});

  
  



/* FIN CONEXION A BASE DE DATOS */

app.post("/procesar",function(req,res){ //req: Peticion, res: Respuesta

   //req.query es un JSON con los valores enviados mediante GET
   //req.body es un JSON con los valores enviados mediante POST, es necesario instalar el modulo body-parser
   res.send("Información recibida" + JSON.stringify(req.body)); 
   res.end();
});

//Verificar si existe una variable de sesion para poner publica la carpeta dashboard

/*

app.use(
    function(req,res,next){
        if (req.session.correo){
            //Significa que el usuario si esta logueado
            if (req.session. == 1)
                publicCajero(req,res,next);
           
        }
        else
            return next();
    }
);

*/
app.use(function (err, req, res, next) {
   console.error(err.stack)
   res.status(500).send('Something broke!')
 })



router.get('/select', function(req, res) {
   database.connection.query('SELECT nombre, apellido FROM usuarios', function(err, rows, fields) {
       res.json(rows);
   });
});


app.post("/login",function(req, res){
   var conexion = mysql.createConnection(credenciales);
   conexion.query(
       "SELECT  CORREO, CONTRASENA FROM USUARIOS WHERE CONTRASENA = sha1(?) and CORREO=?",
       [req.body.CORREO, req.body.CONTRASENA],
       function(error, data, fields){
           if (error){
               res.send(error);
               res.end();
           }else{
               if (data.length==1){
               
                   req.session.CORREO = data[0].CORREO;
                   req.session.CONTRASENA = data[0].CONTRASENA;
               }
               res.send(data);
               res.end();
           }
       }
   )
});
function verificarAutenticacion(req, res, next){
	if(req.session.CORREO)
		return next();
	else
		res.send("ERROR, ACCESO NO AUTORIZADO");
}

//Verificar si existe una variable de sesion para poner publica la carpeta dashboard

var dashboard = express.static("dashboard");
app.use(
    function(req,res,next){
        if (req.session.CORREO){
            //Significa que el usuario si esta logueado
            if (req.session.CONTRASENA == 1)
                dashboard(req,res,next);
   
        }
        else
            return next();
    }
);






app.get("/", function(req,res){
   res.render("index");
});
app.get("/login", function(req,res){
res.render("login");
});


// POST / login obtiene cuerpos urlencoded


/* 
app.post('/login.html', urlencodedParser, function (req, res) {
   if (!req.body) return res.sendStatus(400)
   res.send('Bienvenido, ' + req.body.username)
 })*/

  


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

/*
app.get("/formulario-registro.html",function(req,res){
   var conexion = mysql.createConnection(credenciales);
   conexion.query("INSERT INTO USUARIOS(nombre, apellido,correo, contrasena, plan) VALUES (?,?,?,?,?)",
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

*/





//conexion.end();
  
app.use(function(req, res, next) {
   res.status(404).send('Lo siento no puedo encontrar eso!');
 });



app.listen(8111, function(){
  console.log("El servidor esta arriba");
});



//************************************************************************* */





