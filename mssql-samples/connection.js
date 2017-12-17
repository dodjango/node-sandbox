(() => {
  "use strict";

  const sql = require('mssql');

  const config = {
    user: 'sa',
    password: 'sql2017Playground!',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'master',
    
    options: {
      encrypt: false // Use this if you're on Windows Azure
    }
  };

  sql.on('error', err => {
    console.log("SQL ERROR:");
    console.log(err);
  });
  sql.on('info', info => {
    console.log("SQL INFO:");
    console.dir(info)
  });

  (async () => {
    let pool;
    try {
      pool = await sql.connect(config)
      let result1 = await pool.request()
      .input('input_parameter', sql.NVarChar, "test")
      .query("select name from sys.databases where 'test' = @input_parameter")
//      .query("RAISERROR (N'This is message %s %d.', 15, 1, N'number', 5)");

      console.dir(result1);
      pool.close(); // necessary, otherwise the program does not end due to referenced connections
    } catch (err) {
      pool.close(); // necessary, otherwise the program does not end due to referenced connections
      console.log("ERROR:");
      console.log(err);
    }
  })();


})();