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
const tableQueryRouter = require("./src/routes/dataQuery.route");


app.get("/api", (req, res) => {
    res.json({ message: "API test succeeded!" }); //to test whether API call is working or not at localhost:8000/api
  });

app.use("/table-query", tableQueryRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```
11. Type "npm run start" on your cmd/PowerShell, and go to localhost:8000/api in your browser. You should see this message if your API call is working properly:
```
{ "message": "API test succeeded!" }
```
12. Open src/configs and create a file named db.config.js; this will contain your db connection credentials. File content will look like this:
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
