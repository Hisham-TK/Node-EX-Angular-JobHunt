let mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const employerSchema = new mongoose.Schema({
    employerId: Number,
    accountId: {
        type: Number,
        required: true
    },
    description: String,
    hr: {
        name: {
            first: {
                type: String,
               // required: true
            },
            middle: {
                type: String,
               // required: true
            },
            last: {
                type: String,
              //  required: true
            },
        },
        mobile: {
            type: String,
           // required: true
        },
        gender: Boolean,
    },
    manager: {
        name: {
            first: {
                type: String,
               // required: true
            },
            middle: {
                type: String,
               // required: true
            },
            last: {
                type: String,
               // required: true
            },
        },
        mobile: {
            type: String,
          //  required: true
        },
        email: {
            type: String,
           // required: true
        },
        nationalId: {
            type: String,
           // required: true
        },
        nationalImage: {
            type: String,
          //  required: true
        },
        gender: {
            type: Boolean,
            default: true
        },
    },
    employer: {
        name: {
            first: {
                type: String,
               // required: true
            },
            middle: {
                type: String,
               // required: true
            },
            last: {
                type: String,
              //  required: true
            },
        },
        email: {
            type: String,
          //  required: true
        },
        website: String,
        phoneNumber: [String],
        address: {
            country: {
                type: String,
                default:" "
              //  required: true
            },
            city: {
                type: String,
                default:" "
             //   required: true
            },
            district: {
                type: String,
                default:" "
             //   required: true
            },
            street: {
                type: String,
                default:" "
               // required: true
            },
            building: {
                type: Number,
                default:" "
             //   required: true
            },
        },
        industryType: {
            type: String,
            enum: []
        },
        employerDocument: String,
        receiptOfFacilities: String,
        logo: String,
        slogan: String,
        socialMedia: {
            facebook:  {
                type: String,
                default:" "
               // required: true
            },
            linkedIn:  {
                type: String,
                default:" "
               // required: true
            },
            githup:  {
                type: String,
                default:" "
               // required: true
            },
            googlePlus: {
                type: String,
                default:" "
               // required: true
            },
        },
        accepted: {
            type: Boolean,
            default: false
        },
        blocked: {
            type: Boolean,
            default: false
        },
        publishedJobs: [{
            type: Number,
            ref: "jobs"
        }],
        feedbacks: [{
            candidateId: {
                type: Number,
                ref: "candidates"
            },
            rate: Number,
            message: String
        }]
    }

});

employerSchema.plugin(AutoIncrement, {
    inc_field: 'employerId'
});
mongoose.model("employers", employerSchema);
