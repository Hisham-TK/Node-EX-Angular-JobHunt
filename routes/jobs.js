var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var jwt = require('jsonwebtoken');

require("../models/job");
require("../models/employer");

var jobSchema=mongoose.model("jobs");
var employerSchema=mongoose.model("employers");

function verfiyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request')
    }

    let token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (token === 'null') {
        console.log("3");
        return res.status(401).send('Unauthorized Request')
    }
    try {
        let payload = jwt.verify(token, 'secret');
        //console.log(payload.subject);
        req.userData = {accountId: payload.subject.accountId, userType: payload.subject.userType };
       console.log(req.userData);
    }
    catch(err) {
        return res.status(401).send('Unauthorized Request')
    }
    let payload = jwt.verify(token, 'secret');
    if (!payload) {
        console.log("4");
        return res.status(401).send('Unauthorized Request')
    }
    // req.userId = payload.subject
    next();
}
/* GET users listing. */
router.get('/all', function(req, res, next) {
    // res.send("hi");
    jobSchema.find({jobState:"true"}).then((result)=>{
       res.send(result);
    })
    // jobSchema.find({}).populate({"path":"employerId  "}).then((result)=>{
    //     response.render("events/listevent",{layout: 'layouts/adminLayout',events:result});

    // })

});

router.get('/:id', function(req, res, next) {
     //res.send("hi");

    jobSchema.findOne({jobId:req.params.id,jobState:"true"}).then((job)=>{
      // console.log(result);
      employerSchema.findOne({employerId:job.employerId}).then((company) => {
        res.send({job, company});
      })
    })


});

router.get('/employerJobs/:id',verfiyToken, function (req, res, next) {
    jobSchema.find({
        employerId: req.userData.accountId,
        jobState:"true"
    }).then((result) => {
        res.send(result);
    })

});

router.get('/listJobs/:id', function (req, res, next) {


    jobSchema.find({
        employerId: req.params.id,
        jobState:"true"
    }).then((result) => {
        res.send(result);
    })

});

router.post('/add',verfiyToken, function(req, res, next) {
    console.log(req.body);
 let skill = req.body.job.skill.split(" ");
 console.log(skill);
    let job = new jobSchema({
         "details.title":req.body.job.title,
         "details.categories": req.body.job.Category,
         "details.description":req.body.job.description,
         "details.type": req.body.job.type,
         "details.skills": skill,
         "details.level": req.body.job.level,
         "details.expireDate":req.body.job.date,
         "details.offeredSalary.salary": req.body.job.salary,
         "details.offeredSalary.offeredSalaryState": req.body.job.state,
         "details.offeredJobs":req.body.job.position,
          "employerId": req.userData.accountId

    });

  // console.log("ngdgd"+req.userData.accountId);
    job.save((error, result) => {

        if(error) {
            console.log(error);
        } else {
         console.log("id"+result.jobId);
          employerSchema.update({accountId: req.body.empid},{
            $push:{
                "employer.publishedJobs": result.jobId
            }},
            {safe: true, upsert: true},
            function(err, doc) {
                if(err){
                console.log(err);
                }else{
                //do stuff
                }
            }
         );
          res.send(result);
        }
    })

  });

router.post("/edit/:id",(req,res)=>{
    console.log(req.body);
    let skill = req.body.skill.split(" ");
    jobSchema.update({jobId:req.params.id},{
        "$set":{
             "details.title": req.body.title,
             "details.description":req.body.description,
             "details.type":req.body.type,
             "details.categories":req.body.Category,
             "details.skills": skill,
             "details.level":req.body.level,
             "details.expireDate":req.body.date,
            "details.offeredSalary.salary":req.body.salary,
            "details.offeredSalary.offeredSalaryState":req.body.state,
            "details.offeredJobs":req.body.position
         }
     },(error)=>{
         if(!error)
         {
            jobSchema.find({jobId:req.params.id}).then((result)=>{
                console.log(result);
                res.send(result);
             })

         }
         else {
            console.log(error);
         }
     })

 });

 router.get("/delete/:id",(req,res)=>{
   let empid;
   jobSchema.findOne({jobId:req.params.id,jobState:"true"}).then((job)=>{
       empid = job.employerId;
    jobSchema.update({jobId:req.params.id},{
        "$set":{
          "jobState": "false"
        }},
        {safe: true, upsert: true},
        function(err, doc) {
            if(err){
            console.log(err);
            }else{

                employerSchema.update({accountId: empid},
                    { $pull: { "employer.publishedJobs": req.params.id }},
                    {safe: true, upsert: true},
                    function(err, doc) {
                        if(err){
                        console.log(err);
                        }else{
                        //do stuff
                        }
                    }

                 )
            }

        })
    })

});

module.exports = router;
