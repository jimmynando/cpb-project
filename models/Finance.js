var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var financeSchema = new Schema({
    description: {type: String, required: true},
    valor: String,
    data: Date,
    category: String
}, {collection: 'finance'});

var Finance = mongoose.model('Finance', financeSchema);

module.exports = Finance;