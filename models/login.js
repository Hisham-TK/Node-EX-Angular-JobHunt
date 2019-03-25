const mongoose = require('mongoose'),
    AutoIncrement = require('mongoose-sequence')(mongoose);

const loginSchema = new mongoose.Schema({
    accountId: Number,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: Boolean
});

loginSchema.plugin(AutoIncrement, {
    inc_field: 'accountId'
});

mongoose.model('logins', loginSchema);
