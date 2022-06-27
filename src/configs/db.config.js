
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'username',
  host: 'hostname',
  database: 'dbname',
  password: 'dbpassword',
  port: 5432,
  ssl: { 
    rejectUnauthorized: false 
  }
})
pool.connect();
module.exports = pool;
