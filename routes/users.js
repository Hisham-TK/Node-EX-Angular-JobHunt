var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
let mong = require("mongoose");

require('../models/login');
let loginSchema = mong.model('logins');

require('../models/employer');
let empSchema = mong.model('employers');

// require('../models/candidate');
// let candidateSchema = mong.model('candidates');

candidateSchema = require('../models/candidate');

router.post('/register', function (req, res, next) {
    let user = req.body;
    let login = new loginSchema(user);

    //console.log(user);
    login.save((error, login) => {
        if (!error) {
            if (login.userType) {
                let employer = new empSchema(user);
                employer.accountId = login.accountId;
                employer.save((error) => {
                    let token;
                    if (!error) {
                        let payload = {
                            subject: {
                                'accountId': employer.accountId,
                                "userType": login.userType
                            }
                        };
                        token = jwt.sign(payload, "secret");
                        res.send({token, accountId: login.accountId, userType: login.userType})
                    } else {
                        res.send({"error": "error"})
                    }
                });
            } else {
                emptyCandidate = {
                    'accountId': user.accountId,
                    'information': {
                        'name': {
                            'first': user.information.name.first,
                            'middle': user.information.name.middle,
                            'last': user.information.name.last
                        },
                        'address': {
                            'country': null,
                            'state': null,
                            'city': null,
                            'district': null,
                            'street': null,
                            'building': null,
                            'floor': null,
                            'apartment': null
                        },
                        'socialMedia': {
                            'website': null,
                            'linkedIn': null,
                            'github': null,
                            'stackOverflow': null,
                            'youtube': null,
                            'googlePlus': null,
                            'facebook': null,
                            'twitter': null
                        },
                        'gender': null,
                        'birthDate': null,
                        'mobile': user.mobile,
                        'email': user.email
                    },
                    'profile': {
                        'currentSalary': {'salary': null, 'viewState': null},
                        'expectedSalary': {'salary': null, 'viewState': null},
                        'cvs': [null],
                        'profileImage': 'default_profile_picture.jpg',
                        'cv': null,
                        'coverLetter': null,
                        'description': null,
                        'portfolio': [{'image': 'default_project_image.png', 'title': null}],
                        'nationalId': null,
                        'nationalIdImage': 'default_id_image.jpg'
                    },
                    'education': {
                        'educationLevel': null,
                        'university': [{
                            // '_id': null,
                            'educationType': null,
                            'institute': null,
                            'degreeType': null,
                            'percentage': null,
                            'startYear': null,
                            'endYear': null,
                            'field': null,
                            'description': null
                        }]
                    },
                    'experience': {
                        'jobTitle': null,
                        'careerLevel': null,
                        'yearsOfExperience': null,
                        'skills': [{'title': null, 'percentage': null}],
                        'languages': [{'name': null, 'level': null}],
                        'workExperience': [{
                            'companyName': null,
                            'startDate': null,
                            'endDate': null,
                            'jobTitle': null,
                            'jobDescription': null
                        }]
                    },
                    'appliedJobs': [{'jobId': null, 'jobState': null}],
                    'options': {'interested': null, 'allowedInSearch': null, 'blocked': null},
                };

                let candidate = new candidateSchema(user);

                candidate.accountId = login.accountId;
                // console.log(emptyCandidate, " candidate");
                candidate.save((error, data) => {
                        let token;
                        if (!error) {
                            let payload = {
                                subject: {
                                    'accountId': candidate.accountId,
                                    "userType": user.userType
                                }
                            };
                            token = jwt.sign(payload, "secret");
                            data.token = token;
                            data.userType = login.userType;
                            console.log(
                                user, '          user          ',
                                data, '          data          ',
                                emptyCandidate, '          empty candidate          '
                            );
                            res.send(data)
                        } else {
                            console.log(error);
                            res.send({"error": "error"})
                        }
                    }
                );
            }
        } else {
            res.send({"error": "error"})
        }
    })
    ;

})
;

router.post("/login", (req, res) => {
    console.log(req.body);
    loginSchema.findOne({
        "email": req.body.email,
        "password": req.body.password
    }, function (err, user) {
        console.log(user);
        if (err) res.send({
            "error": "uesr name or password is in correct"
        });
        if (user != null) {
            let payload = {
                subject: {
                    'accountId': user.accountId,
                    "userType": user.userType
                }
            };
            let token = jwt.sign(payload, "secret");
            if (user.userType == false) {
                candidateSchema.findOne({
                    accountId: user.accountId
                }, (error, result) => {
                    if (error) res.send({
                        "error": "uesr name or password is in correct"
                    });
                    else {
                        console.log(result, user.accountId);
                        res.send({
                            token,
                            userType: user.userType,
                            accountId: user.accountId,
                            _id: result._id
                            // ...result
                        });
                    }

                })
            } else if (user.userType == true) {
                empSchema.find({
                    accountId: user.accountId
                }, (error, result) => {
                    if (error) {
                        res.send({"error": error});
                    } else {
                        res.send({
                            token,
                            userType: user.userType,
                            accountId: user.accountId
                        });
                    }
                })
            }
        }
    });
});

router.get('/getpass/:id', (req, res) => {
    loginSchema.findOne({accountId: req.params.id}, (error, result) => {
        if (error) {
            console.log("error=>>> " + error)
        } else {
            res.send(result);
        }
    })
});

router.post("/savepass/:id", (req, res) => {
    loginSchema.updateOne({accountId: req.params.id}, {
            $set: {password: req.body.password}
        },
        (error) => {
            if (error) {
                console.log(error)
            }
        })
});

module.exports = router;
