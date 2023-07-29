const controller = require('../controllers/bookController');
const router = require('express').Router();

router.get('/getall/', controller.getAllBooks); // localhost:3000/books/getall/
router.get('/searchauthor/:author',controller.searchAuthor); // localhost:3000/books/searchauthor/stephen king
router.get('/searchtitle/:title',controller.searchTitle); // localhost:3000/books/searchtitle/Finders Keepers
router.post('/createreview/', controller.createReview); // localhost:3000/books/createreview/
module.exports = router;