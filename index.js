const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const Book = require('./models/BookReviewModel');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");




  next();
});
app.options('*', function (req,res) { res.sendStatus(200); });

//test route
app.get('/', (req, res, next) => {
  res.json({ message: "Hello from server!" });
});

//CRUD routes
app.use('/books', require('./routes/bookRoutes'));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));