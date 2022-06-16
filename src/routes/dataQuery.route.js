const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const dataQuery = require('../controllers/dataQuery.controller');

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));


/* GET programming languages. */
router.get('/', dataQuery.selectAll);

router.post('/createProg', dataQuery.createRow);

router.put('/updateProg/:id', dataQuery.updateRow);

module.exports = router;