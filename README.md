# testreactexpress
This is a demo version on how to plug Express JS with NodeJS, connecting to phpmyadmin database, and run SQL queries using Express JS backend API.

Pre-requisites:
- Installed NodeJS
- Installed XAMPP
- Installed Postman (optional, but a great tool if you want to test your API request and response!)
- phpmyadmin server started & running
- Setup DB credentials & tables at phpmyadmin

Steps:
1. Create a new folder, put any names you want.
2. Open the folder & run cmd/PowerShell inside that folder.
3. Type "npm init -y" to initialize package.json
4. Type "npm i express" to install Express JS module package.
5. Type "npm i mysql2" to install NodeJS mysql2 module package
6. Type "npm i sequelize" to install NodeJS Sequelizer module package(optional, won't be used in this demo)
7. Type "npm i body-parser" to install NodeJS Body parser module package(optional, won't be used in this demo)
8. Open file package.json and make sure it looks like this:
```

{
  "name": "your-whatever-root-folder-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" //whenever you type "npm run start", it will run this file to start your backend server
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mysql2": "^2.3.3",
    "sequelize": "^6.20.0"
  },
  "proxy": "http://localhost:8000/" //your backend server port, see index.js
}

```

8. Create new folder, name it "src".
9. Open "src", and create these folders inside "src":
```
- configs (your DB config file will be in here)
- controllers (controller file to connect API path with DB query; you can pass request body, setup error message, display HTTP status code)
- middlewares
- models
- routes (your API routing to db query, setup method get, post, put and delete)
- services (contains files to db queries & db connection and query setup)
- utils (contains a helper file, to parse query result into array or empty array if no query result)
```
10. Open index.js file inside root directory, and make sure it looks like this:
```
// server/index.js
const express = require("express");
const PORT = process.env.PORT || 8000; //your backend port number, set it any way you feel comfortable with
const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "API test succeeded!" }); //to test whether API call is working or not at localhost:8000/api
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```
11. Type "npm run start" on your cmd/PowerShell, and go to localhost:8000/api in your browser. You should see this message if your API call is working properly:
```
{ "message": "API test succeeded!" }
```
*NOTE: Press ctrl + C to close your backend server*

12. Open src/configs and create a file named db.config.js under this folder; this will contain your db connection credentials. File content will look like this:
```
const config = {
  db: {
    host: "localhost",
    user: "your-db-username",
    password: "your-db-password",
    database: "your-db-name",
  }
};
module.exports = config;
```
13. Open src/services
14. There are 3 files to be created. First, create a file named db.js; this will contain function to create mysql connection and prepare to execute mysql query
```
const mysql = require('mysql2/promise');
const config = require('../configs/db.config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}
```
15. Go to src/utils and create a file named helper.utils.js; this will contain functions to fetch query result and return empty array if query fails/return 0 result
```
function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }

  module.exports = {emptyOrRows}
```
16. Create another file named dataQuery.services.js inside src/services folder; this contains your DB query, using functions to query the data, return result at services layer
```
const db = require('../services/db');
const helper = require('../utils/helper.utils');
const config = require('../configs/db.config');

async function selectAll(){
 const rows = await db.query(
    'SELECT * FROM yourtable'
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function createRow(requestBody){
    const result = await db.query(
      `INSERT INTO yourtable(col1, col2, col3, col4) VALUES (${requestBody.val1},${requestBody.val2},${requestBody.val3},"${requestBody.val4}")`
    );
  
    let message = 'Error in creating new row';
  
    if (result.affectedRows) {
      message = 'New row created successfully';
    }
  
    return {message};
  }

  async function updateRow(id, requestBody){
    const result = await db.query(
      `UPDATE yourtable 
      SET tableCol="${requestBody.colVal}"
      WHERE pk_id=${id}` 
    );
  
    let message = 'Error in updating table';
  
    if (result.affectedRows) {
      message = 'table updated successfully';
    }
  
    return {message};
  }

module.exports = {
    selectAll,
    createRow,
    updateRow
}
```
