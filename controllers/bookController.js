const axios = require('axios')
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



//create review of a book
exports.createReview = (req, res, next) => {
    const review = req.body.review;
    const stars= req.body.stars;
    const title= req.body.title;
    const author= req.body.author;
    const NYTSummary = req.body.NYTSummary;
    if(
      title==null||
      stars==null||
      review==null||
      author==null||
      NYTSummary==null
     ){
      res.status(400)
      .json({ message: "Mandatory field is missing/null. " })
    }else{
      Book.create({
        title: title,
        stars: stars,
        review: review,
        author: author,
        NYTSummary: NYTSummary,
      })
        .then(result => {
  
          res.status(201).json({
            message: 'Review created successfully!',
            Book: result
          });
        })
       
    }
  
    
  }


exports.searchAuthorNYT= (req, res, next) =>{
    const author = req.params.author;
    console.log("author: " + author);
    if (author==null){
        res.status(400)
        .json({ message: "Mandatory field is null" })
    }else{
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${author}&api-key=p7qfAefTAT6jUxWt8WfNUoX4Vy3WUm4f`)
        .then((response)=>{
      const APIResponse= response.data.results;
            
       // console.log(APIResponse);
        res.status(200).json({APIResponse});
        }
        ) 
    }

  
    }



    exports.searchTitleNYT= (req, res, next) =>{
        const title = req.params.title;
        console.log("title: " + title);
        if (title==null){
            res.status(400)
            .json({ message: "Mandatory field is null" })
        }else{
            axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=p7qfAefTAT6jUxWt8WfNUoX4Vy3WUm4f`)
            .then((response)=>{
          const APIResponse= response.data.results;
                
            console.log(APIResponse);
            res.status(200).json({APIResponse});
            }
            ) 
        }
    
      
        }



        //update book
exports.updateBook = (req, res, next) => {
  const id = req.params.id;
  const updatedReview = req.body.review;
  const updatedStars= req.body.stars;
  const updatedTitle= req.body.title;
  const updatedAuthor= req.body.author;
  const updatedNYTSummary = req.body.NYTSummary;


  if ( 
    id==null||
    updatedReview== null ||
    updatedStars== null ||
    updatedTitle== null||
    updatedAuthor==null||
    updatedNYTSummary==null  
     ){
    res.status(400)
    .json({ message: "Mandatory field is missing/null. " })
  }else{
    Book.findByPk(id)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found!' });
      }
      book.review = updatedReview;
      book.stars= updatedStars;
      book.title= updatedTitle;
      book.author= updatedAuthor
      book.NYTSummary= updatedNYTSummary
      return book.save();
    })
    .then(result => {
      res.status(200).json({message: 'Book updated!', book: result});
    })
    
  
  }
  }


  //delete Review
exports.deleteReview = (req, res, next) => {
  console.log("delete requested")
  const id = req.body.id;
  if (id==null || Number.isInteger(parseInt(id))== false){
    res.status(400)
    .json({ message: "Mandatory field is missing/null/not a integer. " })
  }else{
    Book.findByPk(id)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: 'Book review not found!' });
      }
      return Book.destroy({
        where: {
          id: id
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Book Review entry deleted!' });
    })
  
       
     
}
  }
  