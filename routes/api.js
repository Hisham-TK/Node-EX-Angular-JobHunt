var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

require("../models/job");

var jobSchema=mongoose.model("jobs");

/* GET users listing. */
router.get('/', function(req, res, next) {
    jobSchema.find({},(error,result)=>{
        console.log(result+"*******************");

        res.send(result);
     });

});

router.post('/', function(req, res, next) {

    // res.send("hi");
       let job = new jobSchema(req.body);
       job.save((error, result) => {
           if(error) {
               console.log(error);
           } else {
            console.log(result);
             res.send(result);
           }

       })


});

module.exports = router;
