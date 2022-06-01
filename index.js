// server/index.js
const express = require("express");
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();
const tablequeryRouter = require("./routes/tablequery");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/api", (req, res) => {
    res.json({ message: "API test succeeded!" });
  });

app.use("/table-query", tablequeryRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});