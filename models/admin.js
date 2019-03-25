var mongoose = require('mongoose');
AutoIncrement = require('mongoose-sequence')(mongoose);

var adminSchema = new mongoose.Schema({
    adminId: Number,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    information: {
        name: {
            first: String,
            middle: String,
            last: String
        },
        mobile: String,
        gender: String

    }
});

adminSchema.plugin(AutoIncrement, {
    inc_field: 'adminId'
});
mongoose.model('admin', adminSchema);
