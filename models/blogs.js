var mongoose = require('mongoose');
AutoIncrement = require('mongoose-sequence')(mongoose);


var blogSchema = new mongoose.Schema({
    blogId: Number,
    adminId: Number,
    title: String,
    cover: String,
    excitingContentHeader: String,
    contentBody: String,
    publishDate: Date,
    comments: [{
        candidateId: {
            type: Number,
            ref: "candidates"
        },
        publishDate: Date,
        flags: Number,
        likes: [{
            type: Number,
            ref: "candidates"
        }]
    }],
    state: Boolean,
    likes: [{
        type: Number,
        ref: "candidates"
    }],
    tags: [{
        type: String
    }],
    blogsCategories: [String]
});

blogSchema.plugin(AutoIncrement, {
    inc_field: 'blogId'
});

mongoose.model('blogs', blogSchema);
