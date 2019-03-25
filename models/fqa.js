var mongoose = require('mongoose');
AutoIncrement = require('mongoose-sequence')(mongoose);

var fqaSchema = new mongoose.Schema({
  questionId: Number,
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

adminSchema.plugin(AutoIncrement, {
  inc_field: 'questionId'
});
mongoose.model('fqa', fqaSchema);