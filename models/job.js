let mongoose = require('mongoose'),
    AutoIncrement = require('mongoose-sequence')(mongoose);

let jobSchema = new mongoose.Schema({
    jobId: {
        type: Number,
    },
    employerId: {
        type: Number,
        ref: 'employers',
    },
    // candidates: [{
    //     percent: Number,
    //     candidateId: {
    //         type: Number,
    //         ref: 'candidates'
    //     }
    // }],
    candidateId: [{
        type: Number,
        ref: 'candidates'
        }],
    details: {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        type: {
            type: String,
        },
        categories: {
            type: Number,
            ref: 'categories',
            maxlength: 5
        },
        skills: {
            type: [String],
            maxlength: 50
        },
        level:{
            type: String,
        },
        publishDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        expireDate: {
            type: Date,

        },
        offeredSalary: {
            salary: Number,
            offeredSalaryState: Boolean
        },
        offeredJobs: {
            type: Number
        }
    },
    jobState: {
        type: String,
        default: "true"
    }
    //exam: {
    //     minutes: {
    //         type: Number,
    //         required: true
    //     },
    //     numberOfQuestions: {
    //         type: Number,
    //         required: true
    //     },
    //     successPercent: {
    //         type: Number,
    //         required: true
    //     },
        // questions: [{
        //     question: {
        //         type: String,
        //         required: true
        //     },
        //     answers: [{
        //         type: String,
        //         required: true
        //     }],
        //     rightAnswer: {
        //         type: String,
        //         required: true
        //     }
        // }]
    //}
});

jobSchema.plugin(AutoIncrement, {
    inc_field: 'jobId'
});
mongoose.model('jobs', jobSchema);