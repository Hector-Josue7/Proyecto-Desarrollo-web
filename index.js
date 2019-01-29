var express = require("express");
var mysql      = require('mysql');
var bodyParser = require("body-parser");
var app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:"bd_proyecto",
    port:3306
  });
app.use(express)
  app.get("/guardar",function(req,res){
    var connection = mysql.createConnection(credenciales);
    conexion.query("INSERT INTO usuarios(nombre, apellido, edad, password, pais) VALUES (?,?,?,?,?)",
        [req.query.nombre, req.query.apellido, req.query.edad, req.query.password, req.query.pais],
        function(error, data, fields){
            res.send(data);
            res.end();
        }
    );
});

app.listen(8111, function(){
  console.log("El servidor esta arriba");
});









