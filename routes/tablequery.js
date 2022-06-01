const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const tablequery = require('../services/tablequery');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await tablequery.selectAll());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.post('/createProg', async function(req, res, next) {
    try {
      res.json(await tablequery.createRow(req.body));
    } catch (err) {
      console.error(`Error while creating new row`, err.message);
      next(err);
    }
    // res.json(req.body);
  });

  router.put('/updateProg/:id', async function(req, res, next) {
    try {
      res.json(await tablequery.updateRow(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating row`, err.message);
      next(err);
    }
  });

module.exports = router;