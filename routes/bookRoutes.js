const controller = require('../controllers/bookController');
const router = require('express').Router();

router.get('/getall/', controller.getAllBooks); // localhost:3000/books/getall/
router.get('/searchauthor/',controller.searchAuthor);

module.exports = router;