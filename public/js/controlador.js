window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
}

$("#btn-login").click(function(){
    console.log($("#formulario").serialize());
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