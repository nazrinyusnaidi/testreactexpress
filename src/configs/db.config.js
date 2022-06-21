
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'your-username',
  host: 'your-db-hosting-server',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
  ssl: { 
    rejectUnauthorized: false 
  }
})
pool.connect();
module.exports = pool;
