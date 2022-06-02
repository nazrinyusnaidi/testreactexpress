const dataQuery = require('../services/dataQuery.services');
const db = require('../services/db');
const helper = require('../utils/helper.utils');
const statement = require('../services/queriesList');


//example of router > controller > query list(see: services/queriesList.js)
//directly using db query services in controller level
//queriesList.js only contains plain DB query statements
async function selectAll(req, res, next) {
    var rows = {};
    try {
      rows = res.json(await db.query(statement.select)); 
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }

    const data = helper.emptyOrRows(rows);
    
      return {
        data
      }
  }

  //example of router > controller > query services(using function)
  //db query services is used in functions in services/dataQuery.services.js
  async function createRow(req, res, next) {
    try {
      res.json(await dataQuery.createRow(req.body)); 
    } catch (err) {
      console.error(`Error while creating new row`, err.message);
      next(err);
    }
    // res.json(req.body);
  }

  async function updateRow(req, res, next) {
    try {
      res.json(await tablequery.updateRow(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating row`, err.message);
      next(err);
    }
  }

  module.exports = {
      selectAll,
      createRow,
      updateRow        
  }