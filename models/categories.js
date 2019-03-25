var mongoose = require('mongoose'),
    AutoIncrement = require('mongoose-sequence')(mongoose);

var categoriesSchema = new mongoose.Schema({
    categoryId: Number,
    name: {
        type: String,
        required: true
    }
});

categoriesSchema.plugin(AutoIncrement, {
    inc_field: 'categoryId'
});

mongoose.model('categories', categoriesSchema);