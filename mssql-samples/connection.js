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

(async function () {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
    .input('input_parameter', sql.NVarChar, "test")
    .query("select name from sys.databases where 'test' = @input_parameter");
    
    console.dir(result1);

  } catch (err) {
    console.log(err);
  }
})();

sql.on('error', err => {
  console.log(err);
});
