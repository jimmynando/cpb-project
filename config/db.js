var mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://
        jimmaodamassa:<${process.env.DB_PASSWORD}>
        @cluster0-vw1wv.mongodb.net/test
        ?retryWrites=true&w=majority`, 
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on(
    'error', 
    console.error.bind(console, 'MongoDB connection error:')
);

module.exports = mongoose;