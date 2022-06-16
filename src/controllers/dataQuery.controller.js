//const dataQuery = require('../services/dataQuery.services');
//const db = require('../services/db');
const pool = require('../configs/db.config');
//const helper = require('../utils/helper.utils');
//const statement = require('../services/queriesList');


//example of router > controller > query list(see: services/queriesList.js)
//directly using db query services in controller level
//queriesList.js only contains plain DB query statements
async function selectAll(request, response) {
    
    pool.query('SELECT * FROM users_test', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //example of router > controller > query services(using function)
  //db query services is used in functions in services/dataQuery.services.js
  async function createRow(request, response) {

    const { name, email, status, device_id, platform, role, created_on, updated_on } = request.body;
    console.log(request.body);

    // pool.query('INSERT INTO users_test (name, email, status, device_id, platform, role, created_on, updated_on) VALUES ($1, $2, $3, $4, $5, $6, current_timestamp, current_timestamp)', [name, email, status, device_id, platform, role], (error, results) => {
    //   if (error) {
    //     //throw error.stack
    //   }
    //   response.status(201).send({name: name, STATUS: response.statusCode})
      
    // })
    pool
      .query('INSERT INTO users_test (name, email, status, device_id, platform, role, created_on, updated_on) VALUES ($1, $2, $3, $4, $5, $6, current_timestamp, current_timestamp)', [name, email, status, device_id, platform, role])
      .then(response.status(201).send({name: name, STATUS: response.statusCode}))
      .catch(err => {
        response.status(400).send("Error, bro!");
      })
    
  }

  async function updateRow(request, response, next) {

    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
      'UPDATE users_test SET name = $1, email = $2, updated_on = current_timestamp WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
    
  }

  module.exports = {
      selectAll,
      createRow,
      updateRow       
  }