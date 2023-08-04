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
    NYTSummary: Sequelize.TEXT,
    review: Sequelize.TEXT,
    stars: Sequelize.FLOAT,
    /* Why no ISBN number? Books can have zero or multiple depending on factors like what region it is and which edition it is. 
        This is confusing for users to handle so I am intentionally omitting it. If I was to include it I would do
        ISBN: Sequelize.ARRAY,
        which sequelize/postgres would be able to automatically handle. In the real world if a client wanted me to include it I would. 
        https://academia.stackexchange.com/questions/18273/when-there-are-multiple-isbns-which-should-be-reported-in-a-reference-list
    */
});

module.exports = Book;

