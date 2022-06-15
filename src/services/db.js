// const mysql = require('mysql2/promise');
// const config = require('../configs/db.config');

// async function query(sql, params) {
//   const connection = await mysql.createConnection(config.db);
//   const [results, ] = await connection.execute(sql, params);

//   return results;
// }

// module.exports = {
//   query
// }

// const { Pool } = require('pg');
// const dotenv = require('dotenv');

// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });

// pool.on('connect', () => {
//   console.log('Connection successful!');
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };