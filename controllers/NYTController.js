const axios = require('axios')
const Book = require('../models/BookReviewModel.js');
const sequelize = require("../models/BookReviewModel.js").sequelize;

const Sequelize = require('sequelize');
const Op = require("sequelize").Op;

var NYTAPIKey = require('../NYTAPIKey.js');




exports.searchAuthorNYT= (req, res, next) =>{
    const author = req.params.author;
    console.log("author: " + author);
    if (author==null){
        res.status(400)
        .json({ message: "Mandatory field is null" })
    }else{
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${author}&api-key=${NYTAPIKey} `)
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
            axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=${NYTAPIKey} `)
            .then((response)=>{
          const APIResponse= response.data.results;
                
            console.log(APIResponse);
            res.status(200).json({APIResponse});
            }
            ) 
        }
    
      
        }



 



  




  







