const controller = require('../controllers/bookController');
const NYTController= require('../controllers/NYTController')
const router = require('express').Router();
router.get('/getall/', controller.getAllBooks); // localhost:3000/books/getall/
router.post('/createreview/', controller.createReview); // localhost:3000/books/createreview/
router.put('/updatebyID/:id', controller.updateReview); // localhost:3000/books/updatebyid/:id
router.delete('/deletebyid/:id', controller.deleteReview); // localhost:3000/books/deletebyid/:Id
router.get('/getbyID/:id', controller.getReviewByID); // localhost:3000/books/getbyid/:id
router.get('/searchreviewbyauthor/:author', controller.searchReviewByAuthor); // localhost:3000/books/searchreviewbyauthor/
router.get('/searchreviewbytitle/:title', controller.searchReviewByTitle); // localhost:3000/books/searchreviewbytitle/



//NYT routes
router.get('/searchauthorNYT/:author',NYTController.searchAuthorNYT); // localhost:3000/books/searchauthorNYT/
router.get('/searchtitleNYT/:title',NYTController.searchTitleNYT); // localhost:3000/books/searchTitleNYT/
module.exports = router;