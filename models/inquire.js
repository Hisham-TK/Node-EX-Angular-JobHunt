var mongoose = require('mongoose');
AutoIncrement = require('mongoose-sequence')(mongoose);

var inquiresSchema = new mongoose.Schema({
  inquireId: Number,
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },//enum
  inquireType:{
    type: String,
    required: true
  },
  inquireDescription: {
    type: String,
    required: true
  },
  receviedDate: Date
});

adminSchema.plugin(AutoIncrement, {
  inc_field: 'inquireId'
});
mongoose.model('inquires', inquiresSchema);