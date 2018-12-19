
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
}
var db;


function registrar(){
    var usuario ={
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        contrasena: document.getElementById("contrasena").value,
        cumpleanos: document.getElementById("cumpleanos").value
    }
    //usuarios.push(usuario);

    //Guardar objeto en BD
    var transaccion = db.transaction(["usuarios"],"readwrite");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    var solicitud = objectStoreUsuarios.add(usuario);
    solicitud.onsuccess = function(evento){
        console.log("Se agrego el usuario correctamente");
          llenarTablaUsuarios();
    }

    solicitud.onerror = function(evento){
        console.log("Ocurrio un error al guardar");
    }

    //console.log(usuarios);
}


(function(){
    if (!('indexedDB' in window)){
        console.error("El navegador no soporta indexedDB");
        return;
    }

    var solicitud = window.indexedDB.open("Adamantiun", 1);//Parametros: nombre, version. La version debe ser entero
    
    //Se ejecutara en caso de que pueda abrir la BD sin problemas
    solicitud.onsuccess = function(evento){
        console.log("Se abrio la base de datos");
        db = solicitud.result;
        llenarTablaUsuarios();
    };

    //Se ejecutar en caso no se pueda abrir la base de datos
    solicitud.onerror = function(evento){
        console.error("No se pudo abrir la base datos");
    };

    //Se ejecutara cuando NO exista la base de datos o se necesite actualizar
    solicitud.onupgradeneeded = function(evento){
        console.log("La base de datos se creara o se actualizara");
        db = evento.target.result; //Obteniendo la refencia la base de datos creada (Adamantiun)
        var objectStoreUsuarios = db.createObjectStore("usuarios", {keyPath: "codigo", autoIncrement: true});

        objectStoreUsuarios.transaction.oncomplete = function(evento){
            console.log("El object store de usuarios se creo con exito");
        }

        objectStoreUsuarios.transaction.onerror = function(evento){
            console.log("Error al crear el object store de usuarios");
        }
        //En este punto se debe crear la estructura de la base de datos
        //Es necesario crear almacenes de objetos en la base de datos (Object Store)
    }
})();


function llenarTablaUsuarios(){
    //document.getElementById("contenido-tabla").innerHTML
    var transaccion = db.transaction(["usuarios"],"readonly");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    var cursor = objectStoreUsuarios.openCursor();
    cursor.onsuccess = function(evento){
        //Se ejecuta por cada objeto del objecstore
        if(evento.target.result){
            console.log(evento.target.result.value);
            var usuario = evento.target.result.value;
 
            evento.target.result.continue();
        }
    }
}

function validacion(){
  var   nombre = document.getElementById("nombre").value;
  var apellido =  document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;



if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)
&& apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
  return false;
}
else if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))){
    return false;
}
var ano = document.getElementById("ano").value;
var mes = document.getElementById("mes").value;
var dia = document.getElementById("dia").value;

var fecha = new Date(ano, mes, dia);
 
if( !isNaN(valor) ) {
  return false;
}
var indice = document.getElementById("plan").selectedIndex;
if( indice == null || indice == 0 ) {
  return false;
}
}






/*
var objJSON = {
            nombre: document.getElementById("nombre").value,
            apellido:document.getElementById("apellido").value,
            correo:document.getElementById("correo").value,
            contrasena:document.getElementById("contrasena").value,
            cumpleanos:document.getElementById("cumpleanos").value,
            plan:document.getElementById("plan").value
        };
            $('#btn-registrar').click(function(){
            var data = objJSON;
            $.ajax({
                url : '/enviar',
                data : data,
                method : 'post', //en este caso
                dataType : 'json',
                success : function(response){
                    alert("funciona bien");
                },
                error: function(error){
                    alert("No funciona");
                }
            });
        });
*/
           
	





/********************************************************* 
$("#btn-login").click(function(){

    $.ajax({
        url:"/login",
        method:"POST",
        data:$("#formulario").serialize(),
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            if (respuesta.length == 1)
                window.location.href = "/home.html";
            else 
                alert("Credenciales invalidas");
        },
        error:function(error){
            console.error(error);
        }
    });
});



*/

