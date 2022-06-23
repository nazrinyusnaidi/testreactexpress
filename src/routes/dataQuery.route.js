const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const dataQuery = require('../controllers/dataQuery.controller');

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));


/* GET programming languages. */

router.get('/users', dataQuery.selectAll);

router.post('/user', dataQuery.createRow);

router.put('/user/:id', dataQuery.updateRow);

module.exports = router;