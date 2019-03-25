const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const candidatesSchema = mongoose.model("candidate", new mongoose.Schema({
    "candidateId": Number,
    "accountId": Number,
    "information": {
        "name": {
            "first": String,
            "middle": String,
            "last": String
        },
        "gender": Boolean,
        "birthDate": String,
        "address": {
            "country": String,
            "state": String,
            "city": String,
            "district": String,
            "street": String,
            "building": String,
            "floor": String,
            "apartment": String
        },
        "mobile": String,
        "email": String,
        "socialMedia": {
            "website": String,
            "linkedIn": String,
            "github": String,
            "stackOverflow": String,
            "youtube": String,
            "googlePlus": String,
            "facebook": String,
            "twitter": String
        }
    },
    "education": {
        "educationLevel": String,
        "university": [{
            "educationType": String,
            "institute": String,
            "degreeType": String,
            "percentage": String,
            "startYear": String,
            "endYear": String,
            "field": String,
            "description": String
        }]
    },
    "experience": {
        "jobTitle": String,
        "careerLevel": String,
        "yearsOfExperience": Number,
        "skills": [{
            "title": String,
            "percentage": Number
        }],
        "languages": [{
            "name": String,
            "level": String
        }],
        "workExperience": [{
            "companyName": String,
            "startDate": String,
            "endDate": String,
            "jobTitle": String,
            "jobDescription": String
        }]
    },
    "appliedJobs": [{
        "jobId": {
            "type": Number,
            "ref": "jobs"
        },
        "jobState": Boolean
    }],
    "profile": {
        "profileImage": String,
        "cv": String,
        "cvs": [String],
        "coverLetter": String,
        "description": String,
        "currentSalary": {
            "salary": Number,
            "viewState": Boolean
        },
        "expectedSalary": {
            "salary": Number,
            "viewState": Boolean
        },
        "portfolio": [{
            "image": String,
            "title": String
        }],
        "nationalId": String,
        "nationalIdImage": String,
    },
    "options": {
        "interested": Boolean,
        "allowedInSearch": Boolean,
        "blocked": Boolean,
    }
}).plugin(AutoIncrement, {
    inc_field: "candidateId"
}), "candidates");

module.exports = candidatesSchema;
