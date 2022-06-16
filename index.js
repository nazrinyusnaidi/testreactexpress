// server/index.js
const express = require("express");
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();
const tableQueryRouter = require("./src/routes/dataQuery.route");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use("/api", tableQueryRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});