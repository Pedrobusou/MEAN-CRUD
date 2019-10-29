const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB conected'))
    .catch(e => console.error(error));

module.exports = mongoose;