const controller = require('../controllers/bookController');
const router = require('express').Router();
//these use body instead of parameters if that is what the front end coder wants then it is an easy change. 
router.get('/getall/', controller.getAllBooks); // localhost:3000/books/getall/
router.post('/createreview/', controller.createReview); // localhost:3000/books/createreview/
router.put('/updatebyID/:id', controller.updateBook); // localhost:3000/books/updatebyid/:id
router.delete('/deletebyid/:id', controller.deleteReview); // localhost:3000/bookss/deletebyid/:Id


//NYT routes
router.get('/searchauthorNYT/:author',controller.searchAuthorNYT); // localhost:3000/books/searchauthorNYT/
router.get('/searchtitleNYT/:title',controller.searchTitleNYT); // localhost:3000/books/searchTitleNYT/
module.exports = router;