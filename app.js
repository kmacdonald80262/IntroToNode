//const http = require('http');

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const sql = require('.utils/sql');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + "/views");

app.get('/', (reg, res) => {
  res.render('home', { homemessage: "hey there", bio: "some generic bio info"});
})

app.get('/users', (reg, res) => {
   //get user data when we hit this route


   //try a database connection
   //if the connection fails log error message to the console and quit
   sql.getConnection((err, conection) => {
     if (err) {
       return console.log(err.message);
     }

     let query = "SELECT * FROM tbl_card";
     sql.query(query, (err, rows) => {
       //done with our database connection so let someone else use it
       connection.release();

       if (err) {
        return console.log(err.message);
      }

      //show me the data!
      console.log(rows);

      //res.render('user', rows[0]);
       
     })
   })
})
 app.listen(port, () => {
   console.log(`app is running on port ${port}`);
 })
//const hostname = '127.0.0.1'; //local host
//const port = process.env.port || 3000; // this is a node convention

//const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n');
//});

//server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
//});