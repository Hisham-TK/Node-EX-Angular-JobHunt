var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

require("../models/categories");

var categorySchema=mongoose.model("categories");

/* GET users listing. */
router.get('/all', function(req, res, next) {
    // res.send("hi");
    categorySchema.find().then((result)=>{
       res.send(result);
    });

router.post('/add', function(req, res, next) {

   console.log(req.body);
  // res.send("hi");
    let category = new categorySchema(req.body);

   category.save((error, result) => {
       if(error) {
           console.log(error);
       } else {
        console.log(result);
         res.send(result);
       }

    })
    })

});

module.exports = router;
