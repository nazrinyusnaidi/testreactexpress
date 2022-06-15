//const dataQuery = require('../services/dataQuery.services');
//const db = require('../services/db');
const pool = require('../configs/db.config');
//const helper = require('../utils/helper.utils');
//const statement = require('../services/queriesList');


//example of router > controller > query list(see: services/queriesList.js)
//directly using db query services in controller level
//queriesList.js only contains plain DB query statements
async function selectAll(request, response) {
    // var rows = {};
    // try {
    //   rows = res.json(await db.query(statement.select)); 
    // } catch (err) {
    //   console.error(`Error while getting programming languages `, err.message);
    //   next(err);
    // }

    // const data = helper.emptyOrRows(rows);
    
    //   return {
    //     data
    //   }
    
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

    pool.query('INSERT INTO users_test (name, email, status, device_id, platform, role, created_on, updated_on) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [name, email, status, device_id, platform, role, created_on, updated_on], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
    // try {
    //   res.json(await dataQuery.createRow(req.body)); 
    // } catch (err) {
    //   console.error(`Error while creating new row`, err.message);
    //   next(err);
    // }
    // res.json(req.body);
  }

  async function updateRow(request, response, next) {

    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
      'UPDATE users_test SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
    // try {
    //   res.json(await tablequery.updateRow(req.params.id, req.body));
    // } catch (err) {
    //   console.error(`Error while updating row`, err.message);
    //   next(err);
    // }
  }

  module.exports = {
      // selectAll,
      // createRow,
      // updateRow 
      selectAll,
      createRow,
      updateRow       
  }