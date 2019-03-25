const express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    multer = require('multer'),
    multerMW = multer({dest: path.join(__dirname, "..", "public", "upload")}),
    candidatesRouter = express.Router();

require('../models/candidate');
require('../models/job');

const candidatesSchema = mongoose.model('candidates'),
    jobsSchema = mongoose.model('jobs');

candidatesRouter.post('/add', function (req, res, next) {
    let candidate = new candidatesSchema(req.body);
    candidate.save((err, result) => {
        if (err) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
});

candidatesRouter.get('/list', function (req, res, next) {
    candidatesSchema.find({}).populate({"path": "appliedJobs"}).then((result) => res.send(result));
});


candidatesRouter.get('/profile/:id', function (req, res, next) {

    candidatesSchema.findOne({accountId: req.params.id}, (candidateError, candidateResult) => {
        if (!candidateError) {
            jobsSchema.find(
                {
                    jobId: {$in: candidateResult.appliedJobs.jobId}
                }
                , (jobError, jobResult) => {
                    if (!jobError) {
                        const tmp = {"candidateResult": candidateResult, "jobResult": jobResult};
                        res.send(tmp);
                    } else {
                        console.log(jobError);
                    }
                });
        } else {
            console.log(candidateError);
        }
    });
});


candidatesRouter.post('/update/:id', function (request, res, next) {
    skillsArray = request.body.expreance.skills.toString().split(",");
    const data = request.body;
    data.expreance.skills = skillsArray;
    languagesArray = request.body.information.languages.toString().split(",");
    data.information.languages = languagesArray;
    candidatesSchema.updateOne({accountId: request.params.id},
        {
            "$set": {
                "information": data.information,
                "education": request.body.education,
                "expreance": data.expreance,
                "appliedJobs": request.body.appliedJobs,
                "currentJob": request.body.currentJob,
                "qualification": request.body.qualification,
                "interested": request.body.interested,
                "blocked": request.body.blocked,
                "cv": request.body.cv
            }
        }, (error, result) => {
            if (!error) {
                // console.log(result);
                res.send(result);
            } else {
                console.log(error);
            }

        });

});

candidatesRouter.get('/appliedJobs/:id', (request, response, next) => {

    candidatesSchema.findOne({accountId: request.params.id}, (candidateError, candidateResult) => {
        if (!candidateError) {
            jobsArray = [];
            for (i = 0; i < candidateResult.appliedJobs.length; i++)
                jobsArray.push(candidateResult.appliedJobs[i].jobId);
            // console.log(jobsArray);
            jobsSchema.find(
                {
                    jobId: {$in: jobsArray}
                }
                , (jobError, jobResult) => {
                    if (!jobError) {
                        response.send(jobResult);
                    } else {
                        console.log(jobError);
                    }
                });//job query
        } else {
            console.log(candidateError);
        }
    });
});

module.exports = candidatesRouter;
