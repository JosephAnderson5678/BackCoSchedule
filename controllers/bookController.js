const Book = require('../models/BookReviewModel.js');
const sequelize = require('../util/database');
const { Op } = require("sequelize");

//get all books
exports.getAllBooks = (req, res, next) => {

    Book.findAll()
        .then(books => {
          

            res.status(200).json({ books: books });
        })
        .catch(err => console.log(err));
}
//https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey

