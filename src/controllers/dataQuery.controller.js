const dataQuery = require('../services/dataQuery.services');

async function selectAll(req, res, next) {
    try {
      res.json(await dataQuery.selectAll());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  }

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