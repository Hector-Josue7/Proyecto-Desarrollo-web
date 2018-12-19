var http = require("http");
var router = express.Router();
var fs = require("fs");


exports.envios = function(){
    return "Hola mundo";
};
//Comentario
http.createServer(function(req, res){
    if (req.url == "/pagina1"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><head><link rel='stylesheet' href='/estilos'></head><body><h1>Pagina 1</h1>"+req.url+"</body></html>");
        res.end();
    }else if (req.url == "/pagina2"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><body><h1>Pagina 2</h1>"+req.url+"</body></html>");
        res.end();
    }else if (req.url =="/estilos"){
        res.writeHead(200,{"Content-Type":"text/css"});
        res.write("body{background-color:black;color:white;}");
        res.end();
    }else if (req.url =="/login"){
        fs.readFile("./formulario.html",function(err, data){
            //Se ejecutara cuando termine de leer el archivo
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<html><body><h1>Pagina No encontrada</h1>"+req.url+"</body></html>");
        res.end();
    }
    
}).listen(8111);