// const config = {
//   db: {
//     host: "localhost",
//     user: "exampled_root",
//     password: "abcd1234",
//     database: "lab_dbcamsys",
//   }
// };
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'luvatjzqxanslg',
  host: 'ec2-34-225-159-178.compute-1.amazonaws.com',
  database: 'd2jlflrgkqf5op',
  password: 'd9713f279f4b7e85486eab5d15299c386a05548f3ccdefb53373798c72829641',
  port: 5432,
  ssl: { 
    rejectUnauthorized: false 
  }
})
pool.connect();
module.exports = pool;