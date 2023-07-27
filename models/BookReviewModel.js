const Sequelize = require('sequelize');
const db = require('../util/database');

const Book = db.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    NYTReview: Sequelize.STRING,
    personalComment: Sequelize.STRING,
    isbn: Sequelize.INTEGER,
    stars: Sequelize.INTEGER,

});

module.exports = Book;