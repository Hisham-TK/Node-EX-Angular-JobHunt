var mongoose = require('mongoose');
AutoIncrement = require('mongoose-sequence')(mongoose);

var feedBacksSchema = new mongoose.Schema({
  feedbackId: Number,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  state: Boolean
});

adminSchema.plugin(AutoIncrement, {
  inc_field: 'feedbackId'
});

mongoose.model('feedbacks', feedBacksSchema);