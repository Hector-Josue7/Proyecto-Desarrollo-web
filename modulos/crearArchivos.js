var fs = require('fs');

//crea un archivo llamado mynewfile1.txt:
exports.fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});




//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

//El fs.writeFile()método reemplaza el archivo y contenido especificados:
//Reemplace el contenido del archivo "mynewfile3.txt":

fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

  //El fs.unlink()método elimina el archivo especificado:
  //Eliminar "mynewfile2.txt"
  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  //El fs.rename()método renombra el archivo especificado:
//Cambie el nombre de "mynewfile1.txt" a "myrenamedfile.txt":
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});