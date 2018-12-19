var SQLGETSINGLEDATA = "SELECT * " + 
               "FROM tabla " +
               "WHERE nombre = ? " +
               "ORDER BY id " +
               "DESC "
               "LIMIT 1 ";
exports.SQLGETSINGLEDATA = SQLGETSINGLEDATA;

var SQLSAVESINGLEDATA = "INSERT INTO tabla ( " +
                "nombre , apellidos, edad, " +
      "direccion, correo, telefono, celular) " +
      "VALUES (?,?,?,?,?,?,?)";
exports.SQLSAVESINGLEDATA = SQLSAVESINGLEDATA;